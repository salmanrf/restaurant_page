import sushi from "./img/edited/sushi-1-lowsize.png";

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

function render(parent) {
    parent.appendChild(hero);
    headline.style.left = (headline.offsetWidth * 0) + "px";
    headImage.style.right = (headline.offsetWidth * 0) + "px"; 
}

export default {render};

/* <div id="hero-section">
    <div id="headline">
        <div class="lobster headline-title">Home For Healthy,<br>Delicious Food</div>
        <p class="quicksand headline-desc">No guilty pleasure,<br>just pleasure</p>
        <div id="book-now" class="quicksand">Book Now</div>
    </div>
    <div id="head-image"><img src="3545cba4ac22bfb9bd8ede263eef5753.png" alt="sushi-plater" srcset=""></div>
</div> */