import carpaccio from "./img/dishes/carpaccio.jpg";
import burrata from "./img/dishes/burrata.jpg";
import tartufo from "./img/dishes/tartufo.jpg";
import amatriciana from "./img/dishes/amatriciana.jpg";
import bolognese from "./img/dishes/bolognese.jpg";
import ravioli from "./img/dishes/ravioli.jpg";
import milanese from "./img/dishes/milanese.jpg";
import lamb from "./img/dishes/lamb.jpg";
import seabass from "./img/dishes/seabass.jpg";
import cauliflower from "./img/dishes/cauliflower.jpg";
import tiramisu from "./img/dishes/tiramisu.jpg";
import pannaCotta from "./img/dishes/pannaCotta.jpg";

const starters=[
    {
        name: "Beef Carpaccio",
        description: `Paper-thin slices of beef tenderloin, drizzled with truffle-lemon vinaigrette, served
with wild arugula and aged Parmigiano Reggiano.`,
        img: carpaccio
    },
    {
        name: "Burrata & Heirloom Tomatoes",
        description: `Creamy burrata paired with marinated heirloom tomatoes, fresh basil leaves, and
a touch of aged balsamic reduction.`,
        img: burrata
    }
];

const firstCourses=[
    {
        name: "Tagliolini al tartufo",
        description: `Hand-cut tagliolini tossed in black truffle butter, finished with a generous
shaving of Parmigiano Reggiano.`,
        img: tartufo
    },
        {
        name: "Penne all'Amatriciana",
        description: `Bronze-drawn penne in a traditional Roman sauce of guanciale, slow-simmered tomatoes,
and Pecorino Romano DOP.`,
        img: amatriciana
    },
        {
        name: "Tortellini alla Bolognese",
        description: `Delicate tortellini filled with pork and prosciutto, served in a rich, slow-cooked
Bolognese ragù.`,
        img: bolognese
    },
        {
        name: "Zucchini Blossom Ravioli",
        description: `House-made vegan ravioli filled with zucchini blossom and cashew ricotta, served
in a light basil and almond cream.`,
        img: ravioli,
        vegan: true
    }
];

const mains=[
    {
        name: "Milanese Chicken Cutlet",
        description: `Free-range chicken fillet, lightly breaded and pan-fried until golden, served
with lemon and a wild arugula salad.`,
        img: milanese
    },
        {
        name: "Herb-Crusted Rack of Lamb",
        description: `New Zealand lamb crusted with rosemary and garlic, oven-roasted and served over
a red wine reduction and glazed root vegetables.`,
        img: lamb
    },
        {
        name: "Pan-seared Sea Bass",
        description: `Crisp-skinned sea bass fillet with a saffron beurre blanc, fennel purée, and
seasonal baby greens.`,
        img: seabass
    },
        {
        name: "Charred Cauliflower Steak",
        description: `Thick-cut cauliflower steak, fire-charred and seasoned with smoked paprika, served
with tahini, pomegranate, and roasted chickpeas.`,
        img: cauliflower,
        vegan: true
    }
];

const desserts=[
    {
        name: "Tiramisù della casa",
        description: `A classic layered dessert with espresso-soaked ladyfingers, velvety mascarpone cream,
and dark cocoa dusting.`,
        img: tiramisu
    },
        {
        name: "Lemon Panna Cotta",
        description: `Delicately set lemon-infused cream with a raspberry coulis, candied zest, and
a whisper of vanilla.`,
        img: pannaCotta
    }
];

function createMenuSection(name){   //Create the menu section for each dish type
    let containerDiv=document.createElement("div");
    containerDiv.className="dishContainer";
    if(name==="First Courses") containerDiv.id="firsts";
    else containerDiv.id=name.toLowerCase();
    let containerTitle=document.createElement("h2");
    containerTitle.className="dishCategory";
    containerTitle.textContent=name;
    containerDiv.appendChild(containerTitle);
    switch(name){   //Using a switch statement instead of an array mapping because there are only four possible cases
        case "Starters":
            containerDiv.appendChild(createDish(starters));
            break;
        case "First Courses":
            containerDiv.appendChild(createDish(firstCourses));
            break;
        case "Mains":
            containerDiv.appendChild(createDish(mains));
            break;
        case "Desserts":
            containerDiv.appendChild(createDish(desserts));
            break;
    }
    return containerDiv;
}

function createDish(dishType){  //Creates the dish element for each dish of a specified type, which is stored in an array of objects
    let dishContainer=document.createElement("div");
    dishContainer.className="textContent";
    let dishFragment=document.createDocumentFragment();
    dishType.forEach(dish=>{
        let dishDiv=document.createElement("div");
        dishDiv.className="dish";
        let dishImg=document.createElement("img");
        dishImg.className="dishImage";
        dishImg.src=dish.img;
        dishDiv.appendChild(dishImg);
        let separatorDiv=document.createElement("div");
        let dishName=document.createElement("h4");
        dishName.textContent=dish.name;
        separatorDiv.appendChild(dishName);
        let dishDescription=document.createElement("p");
        dishDescription.textContent=dish.description;
        separatorDiv.appendChild(dishDescription);
        dishDiv.appendChild(separatorDiv);
        if(dish.vegan) dishDiv.classList.add("vegan");
        dishFragment.appendChild(dishDiv);
    });
    dishContainer.appendChild(dishFragment);
    return dishContainer;
}

const menuContainer=document.createElement("div");
menuContainer.className="menuContainer";

const menuText=document.createElement("div");
menuText.className="textContent";
menuText.textContent=
`At Wick & Timber, each dish is a quiet celebration of simplicity, seasonality, and craftsmanship. Our
kitchen draws inspiration from classic Italian tradition while embracing a modern approach — where fresh
ingredients, time-honored techniques, and subtle creativity come together on every plate.`;
menuText.appendChild(document.createElement("br"));
menuText.append(`Our team is always happy to accommodate personal tastes or dietary preferences — just
let us know, and we’ll ensure your experience is as enjoyable as it is memorable.`);
menuContainer.appendChild(menuText);

const menuFragment=document.createDocumentFragment();
menuFragment.appendChild(createMenuSection("Starters"));
menuFragment.appendChild(createMenuSection("First Courses"));
menuFragment.appendChild(createMenuSection("Mains"));
menuFragment.appendChild(createMenuSection("Desserts"));

const menuElements=document.createElement("div");
menuElements.className="menuElements";
menuElements.appendChild(menuFragment);
menuContainer.appendChild(menuElements);

export const menuPage=menuContainer;