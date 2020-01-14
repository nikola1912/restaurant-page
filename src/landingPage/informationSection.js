import aboutContent from "../tabs/aboutTab.js";
import menuContent from "../tabs/menuTab.js";

const informationSection = () => {

    const informationDiv     = document.createElement("div");
    const informationTabs    = document.createElement("div");
    const informationContent = document.createElement("div");

    informationDiv.id     = "information";
    informationTabs.id    = "informationTabs";
    informationContent.id = "informationContent";
     
    const aboutTab   = document.createElement("button");
    const menuTab    = document.createElement("button");
    const contactTab = document.createElement("button");

    aboutTab.id   = "aboutTab";
    menuTab.id    = "menuTab";
    contactTab.id = "contactTab";  

    aboutTab.className   = "tab";
    menuTab.className    = "tab selectedTab";
    contactTab.className = "tab";

    aboutTab.textContent   = "ABOUT";
    menuTab.textContent    = "MENU";
    contactTab.textContent = "CONTACT";

    informationTabs.appendChild(aboutTab);
    informationTabs.appendChild(menuTab);
    informationTabs.appendChild(contactTab);

    informationContent.appendChild(aboutContent());

    informationDiv.appendChild(informationTabs);
    informationDiv.appendChild(informationContent);
    
    return informationDiv;
};

export default informationSection;