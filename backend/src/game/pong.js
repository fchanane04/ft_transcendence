// Select canvas

const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// Create User paddle

const user = {
    x : 0,
    y : cvs.height/2 -100/2,
    width : 15,
    height : 90,
    color : "#D9D9D9",
    score : 0
}

const computer = {
    x : cvs.width - 15,
    y : cvs.height/2 - 100/2,
    width : 15,
    height : 90,
    color : "#D9D9D9",
    score : 0
}

// Create Ball

const ball = {
    x : cvs.width/2,
    y : cvs.height/2,
    radius : 12,
    speed : 5,
    velocityX : 5,
    velocityY : 5,
    color : "#4BE4A8" 
}

function drawRect(x, y, w, h, color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

//drawRect(0, 0, cvs.width, cvs.height, "GREEN");

// Create the net

const net = {
    x : cvs.width/2 - 1,
    y : 0, 
    width : 2,
    height : 10,
    color : "#D9D9D9"
}

function drawNet()
{
    for (let i = 0; i < cvs.height; i += 15)
    {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// draw Circle

function drawCircle(x, y, r, color)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

//drawCircle(100, 100, 50, "#4BE4A8");

// draw Text :
function drawText(text, x, y, color)
{
    ctx.fillStyle = color;
    ctx.font = "45px nunito";
    ctx.fillText(text, x, y);
}

//drawText("Fuck you", 300, 300, "WHITE");

// RENDER THE GAME
function render()
{
    //clear the canvas
    drawRect(0, 0, cvs.width, cvs.height, "#262B3F");
    // draw the net
    drawNet();

    //draw Score
    drawText(user.score, cvs.width / 4, cvs.height / 5, "#FDFFFF");
    drawText(computer.score, 3 * cvs.width / 4, cvs.height / 5, "#FDFFFF"); // Update to computer.score

    // draw the user and computer paddle :
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

    // Draw the ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

// update : pos, mov, score, ...

// controll the paddle

cvs.addEventListener("mousemove", movePaddle);

function movePaddle(evt)
{
    let rect = cvs.getBoundingClientRect();
    let mouseY = evt.clientY - rect.top - user.height / 2;

    // Ensure the paddle cannot move above the top of the canvas
    user.y = Math.max(0, mouseY);

    // Ensure the paddle cannot move below the bottom of the canvas
    user.y = Math.min(cvs.height - user.height, user.y);
}

// collision detection

function collision(b, p)
{
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;

}

function resetBall()
{
    ball.x = cvs.width/2;
    ball.y = cvs.height/2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
    ball.color = "#4BE4A8"
}

const maxSpeed = 10;
const colorChangeRate = 2;

function update()
{
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    
    // Simple bot to control the computer paddle :

    let computerLevel = 0.1;

     // Calculate the target y position for the computer's paddle
     let targetY = ball.y - computer.height / 2;

     // Ensure the computer's paddle stays within the canvas
     if (targetY < 0) {
         targetY = 0;
     } else if (targetY + computer.height > cvs.height) {
         targetY = cvs.height - computer.height;
     }
 
     // Smoothly move the computer's paddle towards the target position
     computer.y += (targetY - computer.y) * computerLevel;

    //computer.y += (ball.y - (computer.y + computer.height/2)) * computerLevel;    
    if (ball.y + ball.radius > cvs.height || ball.y  - ball.radius < 0)
    {
        ball.velocityY = -ball.velocityY;
    }

    let player = (ball.x < cvs.width/2) ? user : computer;
    
    if (collision(ball, player))
    {
        //ball.velocityX = - ball.velocityX;
        // Where the ball hits the player
        let collidePoint = ball.y - (player.y + player.height/2);

        // Normalization
        collidePoint = collidePoint / (player.height/2);

        // Calculate the angle in Randian
        let angleRad = collidePoint * Math.PI/4;

        // Direction of the ball :

        let direction = (ball.x < cvs.width/2) ? 1 : -1;

        // change velocity of  x and y

        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY =             ball.speed * Math.sin(angleRad);

        // Everytime the ball hits a paddle, we increase its speed

        ball.speed += 0.8;

        if (ball.speed > 10 && ball.speed < 30)
        {
            ball.color = "#67e44b";
        }
        if (ball.speed >= 30 && ball.speed < 50)
        {
            ball.color = "#d9e44b";
        }
        if (ball.speed >= 50 && ball.speed < 70)
        {
            ball.color = "#e4914b";
        }
        if (ball.speed >= 70)
        {
            ball.color = "#e44b4b";
        }
    }

    // update the score :
    if (ball.x - ball.radius < 0)
    {
        // Computer wins
        computer.score++;
        resetBall();
    }
    else if (ball.x + ball.radius > cvs.width)
    {
        // the user wins
        user.score++;
        resetBall();
    }
}

//Game init :

function game()
{
    update();
    render();
}

// game loop
const framePerSecond = 50;
setInterval(game, 1000/framePerSecond);