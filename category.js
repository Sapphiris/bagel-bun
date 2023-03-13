"use strict";

const assetSelection = document.querySelector(".asset-selection ul")

// Initialize metaSize
let metaSize;

async function loadMetaSize() {
  const metaSizePromise = fetch("assets/meta.json")
    .then(response => response.json());
  metaSize = await metaSizePromise;
}

loadMetaSize();

// Body Button
document.getElementById("bodyBtn").addEventListener("click", async () => {

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
});

// Ears Button
document.getElementById("earsBtn").addEventListener("click", async () => {

    // List all JSON files
    let earsUrls = [];
    for (let i = 1; i < metaSize.maxEarsSize + 1; i++) {
        earsUrls.push(`assets/ears/ears-${[i]}.json`)
    }

    // Fetch all JSON files
    const earsPromises = earsUrls.map(earsUrl => fetch(earsUrl).then(response => response.json()));
    const earsImgs = await Promise.all(earsPromises);

    // Display images
    let listItems = "";
    for (let i = 0; i < earsImgs.length; i++) {
        const imageSrc = earsImgs[i].image;
        listItems += `<li><img src="${imageSrc}" width="50"></li>`;
    }
    assetSelection.innerHTML = listItems;
});

// Face Button
document.getElementById("faceBtn").addEventListener("click", async () => {

    // List all JSON files
    let faceUrls = [];
    for (let i = 1; i < metaSize.maxFaceSize + 1; i++) {
        faceUrls.push(`assets/face/face-${[i]}.json`)
    }

    // Fetch all JSON files
    const facePromises = faceUrls.map(faceUrl => fetch(faceUrl).then(response => response.json()));
    const faceImgs = await Promise.all(facePromises);

    // Display images
    let listItems = "";
    for (let i = 0; i < faceImgs.length; i++) {
        const imageSrc = faceImgs[i].image;
        listItems += `<li><img src="${imageSrc}" width="50"></li>`;
    }
    assetSelection.innerHTML = listItems;
});

// Accessory Button
document.getElementById("accessoryBtn").addEventListener("click", async () => {

    // List all JSON files
    let accessoryUrls = [];
    for (let i = 1; i < metaSize.maxAccessorySize + 1; i++) {
        accessoryUrls.push(`assets/accessory/accessory-${[i]}.json`)
    }

    // Fetch all JSON files
    const accessoryPromises = accessoryUrls.map(accessoryUrl => fetch(accessoryUrl).then(response => response.json()));
    const accessoryImgs = await Promise.all(accessoryPromises);

    // Display images
    let listItems = "";
    for (let i = 0; i < accessoryImgs.length; i++) {
        const imageSrc = accessoryImgs[i].image;
        listItems += `<li><img src="${imageSrc}" width="50"></li>`;
    }
    assetSelection.innerHTML = listItems;
});

// Hat Button
document.getElementById("hatBtn").addEventListener("click", async () => {

    // List all JSON files
    let hatUrls = [];
    for (let i = 1; i < metaSize.maxHatSize + 1; i++) {
        hatUrls.push(`assets/hat/hat-${[i]}.json`)
    }
    
    // Fetch all JSON files
    const hatPromises = hatUrls.map(hatUrl => fetch(hatUrl).then(response => response.json()));
    const hatImgs = await Promise.all(hatPromises);

    // Display images
    let listItems = "";
    for (let i = 0; i < hatImgs.length; i++) {
        const imageSrc = hatImgs[i].image;
        listItems += `<li><img src="${imageSrc}" width="50"></li>`;
    }
    assetSelection.innerHTML = listItems;
});