function editUser() {
    let form = document.getElementById("edit-user-form");
    let formRoles = document.getElementById("roles-in-form");
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
    
    console.log('FORM ID = ' + form.id)

    fetch('http://localhost:8080/edit', {
        method: 'PATCH',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            id: form.iduser.value, 
            username: form.username.value,
            age: form.age.value,
            email: form.email.value,
            password: form.password.value,
            roles: newRoles
        }),
    })
        .then(response => response.json())
        .then(() => {            
            form.reset();
            showAllUsers();
            $("#modal-edit").modal('hide');
        });
}

function showEditUser(id) {
    let tableBody = document.getElementById("modal-window");
    tableBody.innerHTML = "";

    fetch('http://localhost:8080/getUserById/' + id)
        .then(response => response.json())
        .then(user => {
            tableBody.innerHTML = `
            <div id="modal-edit" class="modal fade" tabindex="-1"
                 role="dialog"
                 aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title mb-0" id="editModalLabel">Edit
                                user</h5>
                            <button type="button" class="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="edit-user-form">
                                <div class="form-group col-6 m-auto p-md-1">
                                    <h6 class="mb-0 text-center" for="exampleInputID">
                                        ID</h6>
                                    <input id="iduser" disabled="true" type="text"
                                           readonly
                                           class="form-control form-control-sm"
                                           aria-describedby="IDHelp"
                                           placeholder="Enter ID"
                                           value="` + user.id + `">
                                </div>
                                <div class="form-group col-6 m-auto p-md-1"
                                     style="margin-bottom: 50px;">
                                    <h6 class="mb-0 text-center" for="username">
                                        Username</h6>
                                    <input id="username" name="username" type="text"
                                           value="` + user.username + `"
                                           class="form-control form-control-sm"
                                           placeholder="Enter username">
                                </div>
                                <div class="form-group col-6 m-auto p-md-1">
                                    <h6 class="mb-0 text-center" for="age">Age</h6>
                                    <input id="age" type="text"
                                           class="form-control form-control-sm"
                                           aria-describedby="ageHelp"
                                           placeholder="Enter age"
                                           value="` + user.age + `">
                                </div>
                                <div class="form-group col-6 m-auto p-md-1">
                                    <h6 class="mb-0 text-center" for="email">Email</h6>
                                    <input id="email" type="text"
                                           value="` + user.email + `"
                                           class="form-control form-control-sm"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter email">
                                </div>
                                <div class="form-group col-6 m-auto p-md-1">
                                    <h6 class="mb-0 text-center" for="password">
                                        Password</h6>
                                    <input id="password" type="text"
                                           class="form-control form-control-sm"
                                           aria-describedby="passwordHelp"
                                           placeholder="Enter password">
                                </div>
                                <div class="form-group col-6 m-auto p-md-1">
                                    <h6 class="mb-0 text-center">Role</h6>
                                    <select id="roles-in-form" class="form-select text-center" multiple
                                            style="height: 50px" name="selectedRoles">
                                    </select>
                                </div>
                                </br>
                            </form>
                        </div>
                        <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                        data-dismiss="modal">Close
                                </button>
                                <button onclick="editUser()" type="submit" class="btn btn-primary">
                                    Save
                                    changes
                                </button>
                        </div>
                    </div>
                </div>
            </div>`;

            createAllRoles("roles-in-form");

            $("#modal-edit").modal('show');

        });
}