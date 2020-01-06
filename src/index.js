console.log("HELLO MOFFO");
console.log("HELLO MOFFO");
console.log("HELLO MOFFO");

import landingSection from "./landingPage/landingSection.js";
import informationSection from "./landingPage/informationSection.js";

const contentDiv = document.getElementById("content");

contentDiv.appendChild(landingSection());
contentDiv.appendChild(informationSection());