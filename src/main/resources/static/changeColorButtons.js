function changeColor(isAdminState) {
    admibBtn = document.getElementById("admin-button");
    userBtn = document.getElementById("user-button");

    if (isAdminState) {
        admibBtn.classList.add("btn-primary");
        admibBtn.classList.add("text-white");
        userBtn.classList.remove("btn-primary");
        userBtn.classList.remove("text-white");
    } else {
        admibBtn.classList.remove("btn-primary");
        admibBtn.classList.remove("text-white");
        userBtn.classList.add("btn-primary");
        userBtn.classList.add("text-white");
    }
}