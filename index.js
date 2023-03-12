"use strict";
 
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
};


//RANDOM GENERATOR
const generateButton = document.getElementById("btn")
generateButton.addEventListener("click", async () => {
    
    // Fetch all JSON files

    const randomBody = Math.floor(Math.random()*12)+1
    const randomEars = Math.floor(Math.random()*11)+1
    const randomFace = Math.floor(Math.random()*8)+1
    const randomAccessory = Math.floor(Math.random()*7)+1
    const randomHat = Math.floor(Math.random()*20)+1

    const newBodyPromise = fetch(`assets/body/body-${randomBody}.json`)
        .then(response => response.json());
    const newEarsPromise = fetch(`assets/ears/ears-${randomEars}.json`)
        .then(response => response.json());
    const newOutlinePromise = fetch("assets/outline.json")
        .then(response => response.json());
    const newFacePromise = fetch(`assets/face/face-${randomFace}.json`)
        .then(response => response.json());
    const newAccessoryPromise = fetch(`assets/accessory/accessory-${randomAccessory}.json`)
        .then(response => response.json());
    const newHatPromise = fetch(`assets/hat/hat-${randomHat}.json`)
        .then(response => response.json());
 
    // Wait for all JSON files to be loaded
    const [newBody, newEars, newOutline, newFace, newAccessory, newHat] = await Promise.all([
        newBodyPromise,
        newEarsPromise,
        newOutlinePromise,
        newFacePromise,
        newAccessoryPromise,
        newHatPromise
    ]);
 
    // Create Image objects for each asset
    const bodyImage = new Image();
    bodyImage.src = newBody.image;
 
    const earsImage = new Image();
    earsImage.src = newEars.image;
 
    const outlineImage = new Image();
    outlineImage.src = newOutline.image;
 
    const faceImage = new Image();
    faceImage.src = newFace.image;
 
    const accessoryImage = new Image();
    accessoryImage.src = newAccessory.image;
 
    const hatImage = new Image();
    hatImage.src = newHat.image;
 
    // Build the final image and render it on the canvas
    const buildBun = () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 475;
        canvas.height = 475;
 
        // Draw all assets with their respective origin position
        ctx.drawImage(bodyImage, newBody.origin.x, newBody.origin.y);
        ctx.drawImage(earsImage, newEars.origin.x, newEars.origin.y);
        ctx.drawImage(outlineImage, newOutline.origin.x, newOutline.origin.y);
        ctx.drawImage(faceImage, newFace.origin.x, newFace.origin.y);
        ctx.drawImage(accessoryImage, newAccessory.origin.x, newAccessory.origin.y);
        ctx.drawImage(hatImage, newHat.origin.x, newHat.origin.y);
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
})