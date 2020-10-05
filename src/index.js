import home from "./home";
import menu from "./menu";
import "./css/main.css";

let contentIndex = [home.getContent(), menu.getContent()];

let header = document.querySelector("header");
header.style.top = (header.offsetHeight * 0) + "px";

let content = document.querySelector("#content"); 

home.render(content); 
let currentPage = home.getContent().getNumber();

let TAB = document.querySelectorAll(".nav-item");

let i = 1;
for(let tab of TAB) {
    tab.setAttribute("page-number", i++);
    tab.getNumber = () => parseInt(tab.getAttribute("page-number"));
    tab.addEventListener("click", slideTab);
}

function slideTab(event) {
    let target = event.currentTarget.getNumber();

    let slidingOut = content.querySelector("div");
    let slidingIn = contentIndex[target-1]; 

    if(target > currentPage) {
        slidingOut.style.left = "-100%";
        slidingIn.style.right = "-100%";

        content.appendChild(slidingIn);
        setTimeout(() => slidingOut.remove(), 500);

        slidingIn.style.right = (slidingIn.offsetWidth * 0) + "px";
        currentPage = target;
    } else if(target < currentPage) {
        slidingOut.style.right = "-100%";
        slidingIn.style.left = "-100%";

        content.appendChild(slidingIn);
        setTimeout(() => slidingOut.remove(), 500);

        slidingIn.style.left = (slidingIn.offsetWidth * 0) + "px";
        currentPage = target;
    }
}