const divRoot = document.querySelector("#root");

const obj = document.createElement("div");
obj.id = "player";
obj.className += "circle";

const exit = document.createElement("div");
exit.className = "circle";
exit.style.top = `${Math.random() * (screen.height - 124)}px`;
exit.style.left = `${Math.random() * (screen.width - 10)}px`;

divRoot.appendChild(exit);
divRoot.appendChild(obj);

let x = (screen.width - 10) / 2;
let y = (screen.height - 124) / 2;
obj.style.top = `${y}px`;
obj.style.left = `${x}px`;

let timers = {};

export const movePlayer = (e) => {
	let direction;
	switch (e.key) {
		case "w":
			direction = "up";
			break;
		case "a":
			direction = "left";
			break;
		case "s":
			direction = "down";
			break;
		case "d":
			direction = "right";
			break;
		default:
			return;
	}
	if (e.key in timers) {
	} else {
		timers[e.key] = setInterval(() => {
			move(direction);
		}, 10);
	}
};

export const stopPlayer = (e) => {
	if (e.key in timers) {
		clearInterval(timers[e.key]);
		delete timers[e.key];
	}
};

export const move = (direction) => {
	switch (direction) {
		case "up":
			y -= 2;
			break;
		case "down":
			y += 2;
			break;
		case "left":
			x -= 2;
			break;
		case "right":
			x += 2;
			break;
	}
	y = y < 0 ? 0 : y;
	y = y > screen.height - 124 ? screen.height - 124 : y;
	console.log(y);
	x = x < 0 ? 0 : x;
	x = x > screen.width - 10 ? screen.width - 10 : x;

	obj.style.top = `${y}px`;
	obj.style.left = `${x}px`;
};

export const usePower = (e) => {
	// if (e.key === "q") {
	const newDiv = document.createElement("div");
	newDiv.className = "shockwave";
	newDiv.style.top = `${y}px`;
	newDiv.style.left = `${x}px`;
	divRoot.appendChild(newDiv);
	let height = 10;
	let time = setTimeout(() => {
		height += 290;
		newDiv.style.height = `${height}px`;
		newDiv.style.width = `${height}px`;
		newDiv.style.top = `${y - height / 2 + 5}px`;
		newDiv.style.left = `${x - height / 2 + 5}px`;
		newDiv.style.opacity = 0;
	}, 100);
	let time2 = setTimeout(() => {
		const obstacle = document.querySelector(".obstacle");
		// if (obstacleIsHit(obstacle, newDiv)) {
		// 	showObstacle(obstacle);
		// }
		newDiv.remove();
	}, 1200);
	// }
};

// const obstacleIsHit = (obstacle, radar) => {
// 	const obstacleTop = obstacle.style.top;
// 	const obstackeTopRange = obstacle.style.height;
// 	const obstacleleft = obstacle.style.left;
// 	const obstacleLeftRange = obstacle.style.width;

// 	const radarRadius = radar.style.height / 2;
// 	const radarTop = radar.style.top + radarRadius;
// 	const radarLeft = radar.style.left + radarRadius;

// 	return true;
// };

// const showObstacle = (obstacle) => {
// 	obstacle.style.opacity = 1;
// 	setTimeout(() => {
// 		obstacle.style.opacity = 0;
// 	}, 500);
// };

const checkCollision = (obj1, obj2) => {
	const r1 = obj1.style.height / 2;
	const r2 = obj1.style.height / 2;

	const pos1 = { x: obj1.style.left, y: obj1.style.top };
	const pos2 = { x: obj2.style.left, y: obj2.style.top };

	const dist = (pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2;
	return dist > r1 + r2;
};


const moveProjectile = () => {

}