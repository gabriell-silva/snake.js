let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "rigth";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

const createBackground = () => {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);
}

const createSnake = () => {
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = "green";
        context.fillRect(snake[index].x, snake[index].y, box, box);
        
    }
}

const drawFood = () => {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

const update = (e) => {
    if (e.keyCode == 37 && direction != "right") return direction = "left";
    if (e.keyCode == 38 && direction != "down") return direction = "up";
    if (e.keyCode == 39 && direction != "left") return direction = "right";
    if (e.keyCode == 40 && direction != "up") return direction = "down";
}

const initialGame = () => {
    
    if (snake[0].x > 15 * box && direction == "right") return snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") return snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") return snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up" ) return snake[0].y = 16 * box;

    createBackground();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //snake directions
    if (direction == "right") return snakeX += box;
    if (direction == "left") return snakeX -= box;
    if (direction == "up") return snakeY -= box;
    if (direction == "down") return snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(initialGame, 100);