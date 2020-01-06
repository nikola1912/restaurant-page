const landingSection = () => {
    
    const landingSectionDiv = document.createElement("div");
    const viewInfoContainer = document.createElement("div");
    const viewInfoButton    = document.createElement("a");
    const scrollDownButton  = document.createElement("a");
    
    landingSectionDiv.id = "landingPage";
    viewInfoContainer.id = "viewInfoContainer";
    viewInfoButton.id    = "viewInfo";
    scrollDownButton.id  = "scrollDown";

    scrollDownButton.href      = "#";
    viewInfoButton.href        = "#";
    viewInfoButton.textContent = "INFORMACIJE";

    landingSectionDiv.appendChild(viewInfoContainer);
    viewInfoContainer.appendChild(viewInfoButton);
    landingSectionDiv.appendChild(scrollDownButton);

    return landingSectionDiv;
};

export default landingSection;