import home from "./home";
import menu from "./menu";
import "./css/main.css";

// Animate sliding header on page load
let header = document.querySelector("header");
header.style.top = (header.offsetHeight * 0) + "px";

// Grab the content container to be filled
let content = document.querySelector("#content");

// Get reference to contents to append to the container
let contentIndex = [home.getContent(), menu.getContent()];

// Give contents a constant width size
for(let item of contentIndex) {
    item.style.width = (content.offsetWidth * 0.90) + "px";
}

// Start with homepage
home.render(content); 

// Keeps track of the tab content
let currentPage = 1;

// Add event listeners to navbar items
let TAB = document.querySelectorAll(".nav-item");

let i = 1;
for(let tab of TAB) {
    tab.setAttribute("page-number", i++);
    // Each navbar has page-number attribute, getNumber() return that number
    tab.getNumber = () => parseInt(tab.getAttribute("page-number"));
    tab.addEventListener("click", slideTab);
}

// Slide function
function slideTab(event) {
    // Get tab number
    let target = event.currentTarget.getNumber();

    // Short-hand reference
    let slidingOut = content.querySelector("div");
    let slidingIn = contentIndex[target-1];     
    
    if(target > currentPage) {
        slidingOut.style.left = "-100%";
        slidingIn.style.right = "-100%";

        // if the slidingIn content happens immediately, the width will be ignored
        // thus shrinking the element according to flex box
        // so it needs to be delayed
        setTimeout(() => { 
            content.appendChild(slidingIn);
            slidingIn.style.right = (slidingIn.offsetWidth * 0) + "px";
            currentPage = target;
        }, 250);

        setTimeout(() => slidingOut.remove(), 250);
    } else if(target < currentPage) {
        slidingOut.style.right = "-100%";
        slidingIn.style.left = "-100%";

        // if the slidingIn content happens immediately, the width will be ignored
        // thus shrinking the element according to flex box
        // so it needs to be delayed
        setTimeout(() => {
            content.appendChild(slidingIn);
            slidingIn.style.left = (slidingIn.offsetWidth * 0) + "px";
            currentPage = target;
        }, 250);

        setTimeout(() => slidingOut.remove(), 250);
    }
}