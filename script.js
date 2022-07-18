let menu = document.querySelector('.menu-list');
let menuItems = document.querySelectorAll('.menu-item');
let hamburger = document.querySelector('.hamburger');
let menuIcon = document.querySelector('.menu');
let closeIcon = document.querySelector('.close');

function mobileMenu() {
    if (menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
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