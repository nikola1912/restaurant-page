import menu from "./menu.js";

const menuContent = () => {

    const menuContent = document.createElement("div");

    Object.keys(menu).forEach((foodType) => {

        const foodTypeContainer = document.createElement("div");
        foodTypeContainer.classList.add("foodTypeContainer");

        Object.keys(menu[foodType]).forEach((food) => {

            const foodName        = menu[foodType][food].name;
            const foodPrice       = menu[foodType][food].price;
            const foodDescription = menu[foodType][food].description;
            const foodImagePath   = menu[foodType][food].image;
            
            const foodContainer            = document.createElement("div");
            const foodNameContainer        = document.createElement("div");
            const foodPriceContainer       = document.createElement("div");
            const foodDescriptionContainer = document.createElement("div");
            const foodImageContainer       = document.createElement("div");
            const foodImage                = document.createElement("img");

            foodContainer           .classList.add("foodContainer");
            foodNameContainer       .classList.add("foodNameContainer");
            foodPriceContainer      .classList.add("foodPriceContainer");
            foodDescriptionContainer.classList.add("foodDescriptionContainer"); 
            foodImageContainer      .classList.add("foodImageContainer");
            foodImage               .classList.add("foodImage");

            foodNameContainer       .textContent = foodName;
            foodPriceContainer      .textContent = foodPrice;
            foodDescriptionContainer.textContent = foodDescription;

            foodImage.src = foodImagePath;
            foodImage.alt = foodName;
            foodImageContainer.appendChild(foodImage);

            foodContainer.appendChild(foodNameContainer);
            foodContainer.appendChild(foodImageContainer);
            foodContainer.appendChild(foodDescriptionContainer);
            foodContainer.appendChild(foodPriceContainer);
            
            foodTypeContainer.appendChild(foodContainer);
        });

        const lineSeperator = document.createElement("div");
        lineSeperator.classList.add("lineSeperator");

        menuContent.appendChild(foodTypeContainer);
        //menuContent.appendChild(lineSeperator);
    });

    return menuContent;
};

export default menuContent;