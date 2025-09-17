//console.log("webpack test");

import "./style.css";
import {homepage} from "./home.js";
import {menuPage} from "./menu.js";

const content=document.getElementById("content");

function deactivateButtons(){
    document.querySelectorAll(".navBtn").forEach((btn)=>{
        btn.classList.remove("active");
    });
}
function initializeContent(e){
    deactivateButtons();
    e.target.classList.add("active");
    content.innerHTML="";
}

const home=document.getElementById("home");
home.addEventListener("click", (e)=>{
    initializeContent(e);
    content.appendChild(homepage);
});

const menu=document.getElementById("menu");
menu.addEventListener("click", (e)=>{
    initializeContent(e);
    content.appendChild(menuPage);
});

const contacts=document.getElementById("contacts");
contacts.addEventListener("click", (e)=>{
    initializeContent(e);
});


home.classList.add("active");
content.appendChild(homepage);