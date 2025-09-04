import chefPlatting from "./img/chef_platting.jpg";

const description=document.createElement("div");
description.className="textContent";

const platting=document.createElement("img");
platting.className="chef";
platting.src=chefPlatting;
platting.alt="Chef platting dishes.";
description.appendChild(platting);

const text=document.createElement("p");
text.className="text";
text.textContent=`This contemporary restaurant offers a warm, inviting atmosphere paired with a menu focused on
fresh, seasonal ingredients. Blending modern and rustic design, the restaurant emphasizes
quality over complexity, with dishes that highlight natural flavors. Guests can enjoy a
rotating selection of thoughtfully prepared meals, from hearty mains to vibrant vegetarian
options. With attentive service and a relaxed yet refined setting, it's a great spot for
both casual lunches and special dinners.`;
description.appendChild(text);

export const homepage=description;