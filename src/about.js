import "./css/about.css";

let aboutPage = document.createElement("div");
aboutPage.setAttribute("id", "aboutpage");

let title = document.createElement("div");
title.setAttribute("id", "title");
title.setAttribute("class", "lobster headline-title");

title.textContent = "About Us";

let description = document.createElement("div");
description.setAttribute("id", "description");

description.innerHTML = "<p class='description-paragraph'>" + 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
                            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + 
                        "</p>" +
                        "<p class='description-paragraph'>" +  
                            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
                            " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        "</p>";

aboutPage.appendChild(title);
aboutPage.appendChild(description);

function getContent() {
    return aboutPage;
}

export default {getContent};


