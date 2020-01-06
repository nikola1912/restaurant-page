const landingPage = () => {
    
    const landingPageDiv = document.createElement("div");
    const viewInfoContainer = document.createElement("div");
    const viewInfoButton = document.createElement("a");
    const scrollDownButton = document.createElement("a");
    
    landingPageDiv.id = "landingPage";
    viewInfoContainer.id = "viewInfoContainer";
    viewInfoButton.id = "viewInfo";
    scrollDownButton.id = "scrollDown";

    scrollDownButton.href = "#";
    viewInfoButton.href = "#";
    viewInfoButton.textContent = "INFORMACIJE";

    landingPageDiv.appendChild(viewInfoContainer);
    viewInfoContainer.appendChild(viewInfoButton);
    landingPageDiv.appendChild(scrollDownButton);

    return landingPageDiv;
}

export default landingPage;