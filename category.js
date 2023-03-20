"use strict";

const assetLister = document.querySelector(".asset-selection ul");

// Initialize metaSize
let metaSize;

async function loadMetaSize() {
	metaSize = await fetch("assets/meta.json").then((response) => response.json());
}

loadMetaSize();

// Body Button
document.getElementById("bodyBtn").addEventListener("click", async () => {
	// List all JSON files
	let bodyUrls = [];
	for (let i = 1; i < metaSize.maxBodySize + 1; i++) {
		bodyUrls.push(`assets/body/body-${[i]}.json`);
	}

	// Fetch all JSON files
	const bodyPromises = bodyUrls.map((bodyUrl) =>
		fetch(bodyUrl).then((response) => response.json())
	);
	const bodyImgs = await Promise.all(bodyPromises);

	// Display images
	let listItems = "";
	for (let i = 0; i < bodyImgs.length; i++) {
		listItems += `<li onClick="assetChange('body','${bodyUrls[i]}')"><img src="${bodyImgs[i].image}" width="50"></li>`;
	}
	assetLister.innerHTML = listItems;
});

// Ears Button
document.getElementById("earsBtn").addEventListener("click", async () => {
	// List all JSON files
	let earsUrls = [];
	for (let i = 1; i < metaSize.maxEarsSize + 1; i++) {
		earsUrls.push(`assets/ears/ears-${[i]}.json`);
	}

	// Fetch all JSON files
	const earsPromises = earsUrls.map((earsUrl) =>
		fetch(earsUrl).then((response) => response.json())
	);
	const earsImgs = await Promise.all(earsPromises);

	// Display images
	let listItems = "";
	for (let i = 0; i < earsImgs.length; i++) {
		listItems += `<li onClick="assetChange('ears','${earsUrls[i]}')"><img src="${earsImgs[i].image}" width="50"></li>`;
	}
	assetLister.innerHTML = listItems;
});

// Face Button
document.getElementById("faceBtn").addEventListener("click", async () => {
	// List all JSON files
	let faceUrls = [];
	for (let i = 1; i < metaSize.maxFaceSize + 1; i++) {
		faceUrls.push(`assets/face/face-${[i]}.json`);
	}

	// Fetch all JSON files
	const facePromises = faceUrls.map((faceUrl) =>
		fetch(faceUrl).then((response) => response.json())
	);
	const faceImgs = await Promise.all(facePromises);

	// Display images
	let listItems = "";
	for (let i = 0; i < faceImgs.length; i++) {
		listItems += `<li onClick="assetChange('face','${faceUrls[i]}')"><img src="${faceImgs[i].image}" width="50"></li>`;
	}
	assetLister.innerHTML = listItems;
});

// Accessory Button
document.getElementById("accessoryBtn").addEventListener("click", async () => {
	// List all JSON files
	let accessoryUrls = [];
	for (let i = 1; i < metaSize.maxAccessorySize + 1; i++) {
		accessoryUrls.push(`assets/accessory/accessory-${[i]}.json`);
	}

	// Fetch all JSON files
	const accessoryPromises = accessoryUrls.map((accessoryUrl) =>
		fetch(accessoryUrl).then((response) => response.json())
	);
	const accessoryImgs = await Promise.all(accessoryPromises);

	// Display images
	let listItems = "";
	for (let i = 0; i < accessoryImgs.length; i++) {
		listItems += `<li onClick="assetChange('accessory','${accessoryUrls[i]}')"><img src="${accessoryImgs[i].image}" width="50"></li>`;
	}
	assetLister.innerHTML = listItems;
});

// Hat Button
document.getElementById("hatBtn").addEventListener("click", async () => {
	// List all JSON files
	let hatUrls = [];
	for (let i = 1; i < metaSize.maxHatSize + 1; i++) {
		hatUrls.push(`assets/hat/hat-${[i]}.json`);
	}

	// Fetch all JSON files
	const hatPromises = hatUrls.map((hatUrl) => fetch(hatUrl).then((response) => response.json()));
	const hatImgs = await Promise.all(hatPromises);

	// Display images
	let listItems = "";
	for (let i = 0; i < hatImgs.length; i++) {
		listItems += `<li onClick="assetChange('hat','${hatUrls[i]}')"><img src="${hatImgs[i].image}" width="50"></li>`;
	}
	assetLister.innerHTML = listItems;
});

// Change assets
const assetChange = (assetType, assetUrls) => {
	switch (assetType) {
		case "body":
			bunny.body = `${assetUrls}`;
			break;
		case "ears":
			bunny.ears = `${assetUrls}`;
			break;
		case "face":
			bunny.face = `${assetUrls}`;
			break;
		case "accessory":
			bunny.accessory = `${assetUrls}`;
			break;
		case "hat":
			bunny.hat = `${assetUrls}`;
			break;
	}

	bunny.build();
};
