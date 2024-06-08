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
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            username: form.usernameNew.value,
            age: form.ageNew.value,
            email: form.emailNew.value,
            password: form.passwordNew.value,
            roles: newRoles
        }),
    })
        .then(response => response.json)
        .then(() => {
            form.reset();
            showAllUsers();
            $('#users-table-tab').click();
        });
}