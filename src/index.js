import landingSection from "./landingPage/landingSection.js";
import informationSection from "./landingPage/informationSection.js";

import aboutContent from "./tabs/aboutTab.js";
import menuContent from "./tabs/menuTab.js";
import contactContent from "./tabs/contactTab.js";

const contentDiv = document.getElementById("content");

contentDiv.appendChild(landingSection());
contentDiv.appendChild(informationSection());

const aboutTab = document.getElementById("aboutTab");
const menuTab = document.getElementById("menuTab");
const contactTab = document.getElementById("contactTab");
const informationContent = document.getElementById("informationContent");
const tabs = document.getElementsByClassName("tab");

const selectTab = () => {
    informationContent.innerHTML = "";
    for (let tab of tabs) tab.classList.remove("selectedTab");
};

aboutTab.addEventListener("click", () => {
    selectTab();
    aboutTab.classList.add("selectedTab");
    informationContent.appendChild(aboutContent());
});

menuTab.addEventListener("click", () => {
    selectTab();
    menuTab.classList.add("selectedTab");
    informationContent.appendChild(menuContent());
});

contactTab.addEventListener("click", () => {
    selectTab();
    contactTab.classList.add("selectedTab");
    informationContent.appendChild(contactContent());
});