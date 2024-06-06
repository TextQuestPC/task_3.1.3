function showAllUsers() {
    let tableBody = document.getElementById("all-users-content");
    tableBody.innerHTML = "";

    fetch("http://localhost:8080/allUsers")
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user) {
                let row = tableBody.insertRow();
                row.setAttribute("id", user.id);
                
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

                let cell_edit_button = row.insertCell();
                cell_edit_button.innerHTML =
                    '<button type="button" onclick="editUser(' + user.id + ')" class="btn btn-info btn-sm text text-white" data-bs-toggle="modal">Edit</button>';

                let cell_delete_button = row.insertCell();
                cell_delete_button.innerHTML =
                    '<button type="button" onclick="showModalDelete(' + user.id + ')" class="btn btn-danger btn-sm" data-bs-toggle="modalDelete">Delete</button>';
            });
        });
}