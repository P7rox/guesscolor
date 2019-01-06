var colors;
var pickedColor;
var squareNum = 6;

var squares = document.querySelectorAll(".square");
var displayMessage = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	modeBtnListeners();
	squareBtnListeners();
	resetBtnListeners();
	reset();
}

function resetBtnListeners() {
	resetButton.addEventListener("click", function () {
		reset();
	});
}

function squareBtnListeners() {
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				displayMessage.textContent = "Correct!!!";
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.background = "#232323";
				displayMessage.textContent = "Try Again";
			}
		});
	}
}

function modeBtnListeners() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function () {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? squareNum = 3 : squareNum = 6 ;
			reset();
		});
	}
}

function reset() {
	colors = generateRandomColor(squareNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	displayMessage.textContent = "";
	resetButton.textContent = "New Color";
}

function pickColor() {
	return colors[Math.floor(Math.random()*colors.length)];
}

function changeColor (color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return ("rgb("+ r + ", " + g + ", " + b + ")");
}