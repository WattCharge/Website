let menuIcon = document.getElementById("menu-icon");
let menuList = document.getElementById("menu-list");
let navBox = document.getElementById("navbox");
let xIcon = document.querySelector("fa-xmark");

menuIcon.onclick = function () {
    if (menuIcon.hasAttribute("true")) {
        menuIcon.classList.add("fa-solid", "fa-xmark");
        menuIcon.classList.remove("fas", "fa-bars", "toggle-menu")
        menuIcon.removeAttribute("true")
        menuIcon.setAttribute("false", "")
        menuList.classList.add("act-menu")
        navBox.style.cssText = " background-color: rgba(0, 0, 0, 0.63);"
    } else if (menuIcon.hasAttribute("false")) {
        menuIcon.classList.remove("fa-solid", "fa-xmark");
        menuIcon.classList.add("fas", "fa-bars", "toggle-menu")
        menuIcon.removeAttribute("false")
        menuIcon.setAttribute("true", "")
        menuList.classList.remove("act-menu");
        navBox.style.cssText = " background-color: transparent;"
    }
}


