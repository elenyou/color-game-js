let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector("h1");
let resetBtn = document.getElementById('reset');
let modeBtn = document.querySelectorAll('.mode');

init();

function init() {
    setUpModeBtns();
    setUpSquares();
    reset();
}

function setUpModeBtns() {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function () {
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listeners
        squares[i].addEventListener('click', function () {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                resetBtn.textContent = 'Play Again!';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ' ';
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}

resetBtn.addEventListener('click', function () {
    reset();
})

function changeColors(color) {
    //loop though all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given constructor(props)
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    const arr = [];
    //repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push to the array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick 'red' from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick 'green' from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick 'blue' from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

