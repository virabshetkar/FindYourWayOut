import { movePlayer, stopPlayer, usePower } from "./modelController.js";

document.onkeydown = (e) => {
	movePlayer(e);
};

document.onkeyup = (e) => {
	stopPlayer(e);
};

setInterval(() => {
	usePower();
}, 400);
