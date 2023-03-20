"use strict";

// RANDOM GENERATOR
const generateButton = document.getElementById("randomButton");
generateButton.addEventListener("click", async () => {
	// Initialize metaSize
	const metaSize = await fetch("assets/meta.json").then((response) => response.json());

	// Fetch all JSON files, randomized
	const getRandomAsset = (assetType, maxSize) => {
		const randomAssetNumber = Math.floor(Math.random() * maxSize) + 1;
		return `assets/${assetType}/${assetType}-${randomAssetNumber}.json`;
	};

	// Change bunny
	bunny.body = `${getRandomAsset("body", metaSize.maxBodySize)}`;
	bunny.ears = `${getRandomAsset("ears", metaSize.maxEarsSize)}`;
	bunny.face = `${getRandomAsset("face", metaSize.maxFaceSize)}`;
	bunny.accessory = `${getRandomAsset("accessory", metaSize.maxAccessorySize)}`;
	bunny.hat = `${getRandomAsset("hat", metaSize.maxHatSize)}`;

	bunny.build();
});
