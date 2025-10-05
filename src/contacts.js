const contactsContainer=document.createElement("div");
contactsContainer.className="contactsContainer";
const contactsContent=document.createElement("div");
contactsContent.className="textContent";
const contactsDiv=document.createElement("div");
contactsDiv.className="contactsDiv";

const contactsFragment=document.createDocumentFragment();
const numbersHeader=document.createElement("p");
numbersHeader.textContent="For any inquiry that may come to mind, feel free to reach out and call us!";
contactsFragment.appendChild(numbersHeader);

const phonesContainer=document.createElement("div");
phonesContainer.className="phonesContainer";

function createContact(id, description, phone){
    let containerDiv=document.createElement("div");
    containerDiv.id=id;
    containerDiv.className="contacts";
    let contactText=document.createElement("p");
    contactText.textContent=description;
    containerDiv.appendChild(contactText);
    let contactNumber=document.createElement("p");
    contactNumber.className="phone";
    contactNumber.textContent=phone;
    containerDiv.appendChild(contactNumber);
    return containerDiv;
}

phonesContainer.appendChild(createContact("reception",
    "Reception and reservations",
    "+1 242-555-7414"
));
phonesContainer.appendChild(createContact("kitchen",
    "Call our kitchen staff for any doubt about allergies or necessities",
    "+1 242-555-7419"
));
contactsFragment.appendChild(phonesContainer);

const addressContainer=document.createElement("div");
addressContainer.className="addressContainer";
const addressHeader=document.createElement("p");
addressHeader.textContent="Or feel free to come visit us!";
addressContainer.appendChild(addressHeader);
const addressDiv=document.createElement("div");
addressDiv.className="address";
addressDiv.textContent="71 Collister Street"
addressDiv.appendChild(document.createElement("br"));
addressDiv.append("New York, NY 10013, USA");
addressContainer.appendChild(addressDiv);

const mapDiv=document.createElement("div");
mapDiv.className="map";
const mapIframe=document.createElement("iframe");
mapIframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.818599638778!2d-74.01174642504822!3d40.72200967139208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f501e4a31b%3A0x5a1a81f3c2c2d664!2s71%20Collister%20St%2C%20New%20York%2C%20NY%2010013%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1758663631969!5m2!1sit!2sit";
mapIframe.allowFullScreen="false";
mapIframe.loading="eager";
mapIframe.referrerpolicy="no-referrer-when-downgrade";
mapDiv.appendChild(mapIframe);
addressContainer.appendChild(mapDiv);

contactsFragment.appendChild(addressContainer);


contactsDiv.appendChild(contactsFragment);

contactsContent.appendChild(contactsDiv);

contactsContainer.appendChild(contactsContent);

export const contactsPage=contactsContainer;