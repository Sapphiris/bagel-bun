"use strict";
 
// ON LOAD
window.onload = async () => {
 
    // Fetch all JSON files
    const defaultBodyPromise = fetch("assets/body/body-1.json")
        .then(response => response.json());
    const defaultEarsPromise = fetch("assets/ears/ears-1.json")
        .then(response => response.json());
    const defaultOutlinePromise = fetch("assets/outline.json")
        .then(response => response.json());
    const defaultFacePromise = fetch("assets/face/face-1.json")
        .then(response => response.json());
    const defaultAccessoryPromise = fetch("assets/accessory/accessory-1.json")
        .then(response => response.json());
    const defaultHatPromise = fetch("assets/hat/hat-1.json")
        .then(response => response.json());
 
    // Wait for all JSON files to be loaded
    const [defaultBody, defaultEars, defaultOutline, defaultFace, defaultAccessory, defaultHat] = await Promise.all([
        defaultBodyPromise,
        defaultEarsPromise,
        defaultOutlinePromise,
        defaultFacePromise,
        defaultAccessoryPromise,
        defaultHatPromise
    ]);
 
    // Create Image objects for each asset
    const bodyImage = new Image();
    bodyImage.src = defaultBody.image;
 
    const earsImage = new Image();
    earsImage.src = defaultEars.image;
 
    const outlineImage = new Image();
    outlineImage.src = defaultOutline.image;
 
    const faceImage = new Image();
    faceImage.src = defaultFace.image;
 
    const accessoryImage = new Image();
    accessoryImage.src = defaultAccessory.image;
 
    const hatImage = new Image();
    hatImage.src = defaultHat.image;
 
    // Build the final image and render it on the canvas
    const buildBun = () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 475;
        canvas.height = 475;
 
        // Draw all assets with their respective origin position
        ctx.drawImage(bodyImage, defaultBody.origin.x, defaultBody.origin.y);
        ctx.drawImage(earsImage, defaultEars.origin.x, defaultEars.origin.y);
        ctx.drawImage(outlineImage, defaultOutline.origin.x, defaultOutline.origin.y);
        ctx.drawImage(faceImage, defaultFace.origin.x, defaultFace.origin.y);
        ctx.drawImage(accessoryImage, defaultAccessory.origin.x, defaultAccessory.origin.y);
        ctx.drawImage(hatImage, defaultHat.origin.x, defaultHat.origin.y);
    };
 
    // Call buildBun() once all images have loaded
    let imagesLoaded = 0;
    const numImages = 6;
    const checkImagesLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === numImages) {
            buildBun();
        }
    };
 
    bodyImage.onload = checkImagesLoaded;
    earsImage.onload = checkImagesLoaded;
    outlineImage.onload = checkImagesLoaded;
    faceImage.onload = checkImagesLoaded;
    accessoryImage.onload = checkImagesLoaded;
    hatImage.onload = checkImagesLoaded;

    // Display Body Category
        // List all JSON files
        let bodyUrls = [];
        for (let i = 1; i < metaSize.maxBodySize + 1; i++) {
            bodyUrls.push(`assets/body/body-${[i]}.json`)
        }
    
        // Fetch all JSON files
        const bodyPromises = bodyUrls.map(bodyUrl => fetch(bodyUrl).then(response => response.json()));
        const bodyImgs = await Promise.all(bodyPromises);
    
        // Display images
        let listItems = "";
        for (let i = 0; i < bodyImgs.length; i++) {
            const imageSrc = bodyImgs[i].image;
            listItems += `<li><img src="${imageSrc}" width="50"></li>`;
        }
        assetSelection.innerHTML = listItems;
};