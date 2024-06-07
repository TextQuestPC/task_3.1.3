addRolesInForm();

function createNewUser() {
    let form = document.getElementById("create-user-form");
    let formRoles = document.getElementById("all-roles-new");
    let newRoles = [];

    for (let i = 0; i < formRoles.length; i++) {
        let option = formRoles.options[i];
        if (option.selected) {
            newRoles.push({
                id: option.value,
                name: "ROLE_" + option.text
            });
        }
    }

    fetch('http://localhost:8080/create', {
        method: 'POST',
        body: JSON.stringify({
            username: form.usernameNew.value,
            age: form.ageNew.value,
            email: form.emailNew.value,
            password: form.passwordNew.value,
            roles: newRoles
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json)
        .then(() => {
            form.reset();
            showAllUsers();
            $('#users-table-tab').click();
        });
}

function addRolesInForm() {
    let rolesForm = document.getElementById("all-roles-new");

    fetch('http://localhost:8080/getAllRoles')
        .then(response => response.json())
        .then(roles => {
            roles.forEach(role => {
                let option = document.createElement("option");
                option.value = role.id;
                option.text = role.name.toString().replace('ROLE_', '');
                rolesForm.appendChild(option);
            })
        })
        .catch(error => console.log(error));
}