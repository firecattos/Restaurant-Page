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
text.textContent=`Wick & Timber is a contemporary restaurant offering a warm, inviting atmosphere and a focus
on fresh, seasonal ingredients. Blending rustic textures with modern design, the space is refined and relaxed.`;
text.appendChild(document.createElement("br"));
text.append(`Our menu emphasizes quality over complexity, with dishes that highlight natural flavors through
thoughtful pairings and wood-fired techniques. From hearty mains to vegetarian plates, everything
is crafted with care.`);
text.appendChild(document.createElement("br"));
text.append(`Whether you're joining us for a weekday lunch or a special occasion, Wick & Timber offers a
dining experience that’s grounded and memorable.`);
description.appendChild(text);

export const homepage=description;