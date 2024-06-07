authorization();

function authorization() {
    fetch('http://localhost:8080/authorize')
        .then(response => response.json())
        .then(user => {
            let roles = listRoles(user)
            document.getElementById("header").textContent = user.username + ' with roles: ' + roles;

            if (roles.includes("ADMIN")) {
                document.getElementById("user-button").classList.add("text-primary");
                document.getElementById("user-tab").remove();
                
                showAllUsers();
            } else {
                document.getElementById("user-button").classList.add("btn-primary");
                document.getElementById("admin-button").remove();
                document.getElementById("admin-tab").remove();
            }

            showUser();
        });
}

function listRoles(user) {
    let roles = "";    
    for (let i = 0; i < user.roles.length; i++) {
        let role = user.roles[i].name;
        roles += " " + role.substring(role.indexOf("_") + 1);
    }

    return roles;
}
