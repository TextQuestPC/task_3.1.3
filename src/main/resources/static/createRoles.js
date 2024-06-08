function createRolesUser(user){
    let allRoles = document.getElementById("roles-in-form");
    allRoles.innerHTML = "";

    user.roles.forEach(role => {
        let option = document.createElement("option");
        option.value = role.id;
        option.text = role.name.toString().replace('ROLE_', '');
        allRoles.appendChild(option);
    });
}

function createAllRoles(id) {    
    let rolesForm = document.getElementById(id);

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