import sushi from "./img/edited/sushi-1-lowsize.png";
import "./css/home.css"

let homePage = document.createElement("div");
homePage.setAttribute("id", "homepage");
homePage.setAttribute("page-number", "1");

let hero = document.createElement("div");
hero.setAttribute("id", "hero-section");

let headline = document.createElement("div");
headline.setAttribute("id", "headline");

headline.innerHTML = "<div class='lobster headline-title'>Home For Healthy,<br>Delicious Food</div>" +
                     "<p class='quicksand headline-desc'>No guilty pleasure,<br>just pleasure</p>" + 
                     "<div id='book-now' class='quicksand'>Book Now</div>"; 


let headImage = document.createElement("div");
headImage.setAttribute("id", "head-image");

let image = new Image("100%", "100%");
image.setAttribute("alt", "sushi-plater");
image.src = sushi;

headImage.appendChild(image);

hero.appendChild(headline);
hero.appendChild(headImage);

homePage.appendChild(hero);

function render(container) {
    container.appendChild(homePage);
    headline.style.left = (headline.offsetWidth * 0) + "px";
    headImage.style.right = (headImage.offsetWidth * 0) + "px"; 
    headline.style.opacity = 1;
    headImage.style.opacity = 1;
}

function getContent() {
    return homePage;
}

export default {render, getContent};