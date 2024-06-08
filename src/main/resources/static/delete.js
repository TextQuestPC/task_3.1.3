function showModalDelete(id) {
    let tableBody = document.getElementById("modal-window");
    tableBody.innerHTML = "";

    fetch('http://localhost:8080/getUserById/' + id)
        .then(response => response.json())
        .then(user => {

            tableBody.innerHTML =
                `<div id="modal-delete" class="modal fade" th:id="${'delete' + user.id}" tabindex="-1"
                     role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mb-0" id="exampleModalLabel">Delete
                                    user</h5>
                                <button type="button" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <form>
                                    <div class="form-group col-5 m-auto p-md-1">
                                        <h6 class="mb-0 text-center" for="idDelete">ID</h6>
                                        <input disabled="true"
                                               readonly
                                               type="email"
                                               class="form-control form-control-sm"
                                               id="idDelete"
                                               aria-describedby="emailHelp"
                                               value="` + user.id + `">
                                    </div>
                                    <div class="form-group col-5 m-auto p-md-1">
                                        <h6 for="usernameDelete" class="mb-0 text-center">
                                            Username</h6>
                                        <input disabled="true"
                                               readonly type="text"
                                               class="form-control form-control-sm mb-0"
                                               id="usernameDelete"
                                               value="` + user.username + `">
                                    </div>
                                    <div class="form-group col-5 m-auto p-md-1">
                                        <h6 for="ageDelete" class="mb-0 text-center">
                                            Age</h6>
                                        <input disabled="true" th:value="${user.age}"
                                               type="email"
                                               class="form-control form-control-sm mb-0"
                                               id="ageDelete"
                                               aria-describedby="emailHelp"
                                               value="` + user.age + `">
                                    </div>
                                    <div class="form-group form-group col-5 m-auto p-md-1">
                                        <h6 for="emailDelete" class="mb-0 text-center">
                                            Email</h6>
                                        <input disabled="true" th:value="${user.email}"
                                               type="email"
                                               class="form-control form-control-sm mb-0"
                                               id="emailDelete"
                                               aria-describedby="emailHelp"
                                               value="` + user.email + `">
                                    </div>
                                    <div class="form-group col-5 mx-auto py-md-10"
                                         style="margin: 12px">
                                        <h6 class="form-label mb-0 text-center">Role</h6>
                                        <select id="roles-in-form" disabled="true"
                                                class="form-select text-center"
                                                multiple
                                                style="height: 50px" name="selectedRoles">
                                        </select>
                                    </div>
                                </form>
                                <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Close
                                        </button>
                                        <button onclick="deleteUser(` + user.id + `)" type="submit" class="btn btn-danger">
                                            Delete
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            createRolesUser(user);

            $("#modal-delete").modal('show');
        });
}

function deleteUser(id) {
    fetch('http://localhost:8080/delete/' + id, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json; '}
    })
        .then(response => {
            $('#' + id).remove();
            $("#modal-delete").modal('hide');
        });
}