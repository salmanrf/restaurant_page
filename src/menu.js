import salad from "./img/edited/salad-low.png";
import salad1 from "./img/edited/salad-1-low.png";
import shrimp from "./img/edited/shrimpandshits-1-low.png";
import soup from "./img/edited/soup-low.png";
import sushi from "./img/edited/sushis-low.png";
import "./css/menu.css";

const MENU = [
    {name: "Salad", price: "$4.0", image: salad},
    {name: "Salad 2", price: "$4.0", image: salad1},
    {name: "Shrimp Salad", price: "$4.0", image: shrimp},
    {name: "Sushi", price: "$4.0", image: sushi},
    {name: "Soup", price: "$4.0", image: soup},
    {name: "Soup 2", price: "$4.0", image: soup},
    {name: "Soup 3", price: "$4.0", image: soup},
    {name: "Soup 4", price: "$4.0", image: soup}
];

let menuPage = document.createElement("div");
menuPage.setAttribute("id", "menupage");
menuPage.setAttribute("page-number", "2");

let sidebar = document.createElement("div");
sidebar.setAttribute("id", "sidebar");

sidebar.innerHTML = "<ul class='sidebar-category quicksand'>Foods" + 
                        "<li class='sidebar-item'>Salad</li>" +
                        "<li class='sidebar-item'>Sushi</li>" +
                        "<li class='sidebar-item'>Soup</li>" +
                        "<li class='sidebar-item'>Others</li>" + 
                    "</ul>" 
                    +
                    "<ul class='sidebar-category quicksand'>Drinks" + 
                        "<li class='sidebar-item'>Juice</li>" +
                        "<li class='sidebar-item'>Infused Water</li>" +
                        "<li class='sidebar-item'>Milk</li>" +
                        "<li class='sidebar-item'>Others</li>" + 
                    "</ul>";

let filter = document.createElement("div");
filter.setAttribute("id", "filter");

let menuContainer = document.createElement("div");
menuContainer.setAttribute("id", "menu-container");

menuPage.appendChild(sidebar);
menuPage.appendChild(filter);
menuPage.appendChild(menuContainer);

function getContent() {
    renderMenu();
    return menuPage;
}

function renderMenu() {
    for(let menu of MENU) {
        let card = document.createElement("div");
        let cardDisplay = document.createElement("div");
        let cardImage = new Image();
        let cardDesc = document.createElement("div");

        card.setAttribute("class", "menu-card");
        cardDisplay.setAttribute("class", "card-display");
        cardImage.setAttribute("class", "card-image");
        cardDesc.setAttribute("class", "card-description");

        cardImage.src = menu.image;
        cardDesc.innerHTML = `<div class='quicksand'>${menu.name}</div>` +
                             `<div class='quicksand'>${menu.price}</div>`;
                                
        cardDisplay.appendChild(cardImage);
        card.appendChild(cardDisplay);
        card.appendChild(cardDesc);

        menuContainer.appendChild(card);
        card.style.opacity = 1;
    }
}

export default {getContent, renderMenu};