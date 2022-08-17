const grid = document.querySelector(".grid");

// Create Grid function
createGrid = () => {
	for (let i = 0; i < 256; i++) {
		// create the divs inside the grid
		const div = document.createElement("div");
		div.classList.add("cell");
		// add the mouseover event
		div.addEventListener("mouseover", function (event) {
			event.target.style.backgroundColor = "black";
		});
		// append the divs in the grid
		grid.appendChild(div);
	}
};

// for every grid created removes the child nodes
function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

// Create Random Color function
function getRandomColor() {
	// variables for every hex letter and number
	let letters = "0123456789ABCDEF";
	let color = "#";
	// iterate through letters while adding # at the beginning
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Create the Grid Slider functionality
const slider = document.querySelector("#slider");
const screenVal = document.querySelector(".value");
// add event listener for the slider to show the value of the grid
slider.addEventListener("input", function () {
	let val = document.getElementById("slider").value;
	// show the value of the screen near slider
	screenVal.textContent = val;
	removeAllChildNodes(grid);
	grid.setAttribute(
		"style",
		`grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
	);
	// for every new value recreate the grid
	for (let i = 0; i < val * val; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		div.addEventListener("mouseover", function (event) {
			event.target.style.backgroundColor = "black";
		});
		grid.appendChild(div);
	}
});

// Create the Reset Button
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
	let val = document.getElementById("slider").value;
	let cell = grid.children;
	// when the button is pressed, every children returns to white
	for (let i = 0; i < val * val; i++) {
		cell[i].style.backgroundColor = "white";
	}
});

// Create the RGB Button
const rgb = document.querySelector("#rgb");
rgb.addEventListener("click", function () {
	let val = document.getElementById("slider").value;
	let cell = grid.children;
	// for every cell hovered call random color function
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener("mouseover", function (event) {
			event.target.style.backgroundColor = getRandomColor();
		});
	}
});

// Created Black Color Button
const black = document.querySelector("#black");
black.addEventListener("click", function () {
	let val = document.getElementById("slider").value;
	let cell = grid.children;
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener("mouseover", function (event) {
			event.target.style.backgroundColor = "black";
		});
	}
});

// Create Choose Color option
const chooseColor = document.querySelector("#color");
chooseColor.addEventListener("input", function () {
	let val = document.getElementById("slider").value;
	let newColor = document.getElementById("color").value;
	let cell = grid.children;
	// for every new color selected from the input, change the cell color on mouseover
	for (let i = 0; i < val * val; i++) {
		cell[i].addEventListener("mouseover", function (event) {
			event.target.style.backgroundColor = newColor;
		});
	}
});

createGrid();
