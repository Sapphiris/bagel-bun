const canvas = document.getElementById("canvas");

document.getElementById("saveButton").addEventListener("click", () => {
	let canvasUrl = canvas.toDataURL();
	const canvasLink = document.createElement("a");
	canvasLink.href = canvasUrl;

	canvasLink.download = "bagel-bun";
	canvasLink.click();
	canvasLink.remove();
});
