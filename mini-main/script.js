
const toggleIcon = document.querySelector(".toggle-icon");
const menuBar = document.querySelector(".menu-bar");

toggleIcon.onclick = function () {
    menuBar.classList.toggle("right");
}

function navigateToPage(){
    window.location.href = "coursepage.html";
}