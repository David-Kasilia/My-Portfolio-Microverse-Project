let menu = document.querySelector('.menu-list');
let menuItems = document.querySelectorAll('.menu-item');
let hamburger = document.querySelector('.hamburger');
let menuIcon = document.querySelector('.menu');
let closeIcon = document.querySelector('.close');

function mobileMenu() {
    if (menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", mobileMenu);

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener("click", mobileMenu);
    }
)