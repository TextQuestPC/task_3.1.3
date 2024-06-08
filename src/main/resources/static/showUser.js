function showUser() {
    fetch("http://localhost:8080/getUser")
        .then(response => response.json())
        .then(user => {
            let tableBody = document.getElementById("user-content");
            tableBody.innerHTML = "";

            let row = tableBody.insertRow(0);
            let cell_id = row.insertCell(0);
            cell_id.innerHTML = user.id;
            let cell_username = row.insertCell(1);
            cell_username.innerHTML = user.username;
            let cell_age = row.insertCell(2);
            cell_age.innerHTML = user.age;
            let cell_email = row.insertCell(3);
            cell_email.innerHTML = user.email;
            let cell_roles = row.insertCell(4);
            cell_roles.innerHTML = listRoles(user);
            
        });
}