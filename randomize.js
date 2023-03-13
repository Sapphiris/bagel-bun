"use strict";

// RANDOM GENERATOR
const generateButton = document.getElementById("btn")
generateButton.addEventListener("click", async () => {

    const metaSizePromise = fetch("assets/meta.json")
        .then(response => response.json());
    const metaSize = await metaSizePromise;
    
    // Fetch all JSON files

    const randomBody = Math.floor(Math.random() * metaSize.maxBodySize)+1
    const randomEars = Math.floor(Math.random() * metaSize.maxEarsSize)+1
    const randomFace = Math.floor(Math.random() * metaSize.maxFaceSize)+1
    const randomAccessory = Math.floor(Math.random() * metaSize.maxAccessorySize)+1
    const randomHat = Math.floor(Math.random() * metaSize.maxHatSize)+1

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