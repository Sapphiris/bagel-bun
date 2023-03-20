const bunny = {
	body: "assets/body/body-1.json",
	ears: "assets/ears/ears-1.json",
	outline: "assets/outline.json",
	face: "assets/face/face-1.json",
	accessory: "assets/accessory/accessory-1.json",
	hat: "assets/hat/hat-1.json",
	build: async () => {
		// List all JSON files
		const assetUrls = [
			bunny.body,
			bunny.ears,
			bunny.outline,
			bunny.face,
			bunny.accessory,
			bunny.hat,
		];

		// Fetch all JSON files
		const [newBody, newEars, newOutline, newFace, newAccessory, newHat] = await Promise.all(
			assetUrls.map((assetUrl) => {
				return fetch(assetUrl).then((response) => response.json());
			})
		);

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
		const drawCanvas = () => {
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

		// Call drawCanvas() once all images have loaded
		let imagesLoaded = 0;
		const numImages = 6;
		const checkImagesLoaded = () => {
			imagesLoaded++;
			if (imagesLoaded === numImages) {
				drawCanvas();
			}
		};

		bodyImage.onload = checkImagesLoaded;
		earsImage.onload = checkImagesLoaded;
		outlineImage.onload = checkImagesLoaded;
		faceImage.onload = checkImagesLoaded;
		accessoryImage.onload = checkImagesLoaded;
		hatImage.onload = checkImagesLoaded;
	},
};
