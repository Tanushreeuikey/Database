var ball;
var database;
var positionn;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    database.ref("ball/position").on("value",readPos)
   
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y)
{
    database.ref("ball/position").set({x:positionn.x+x,y:positionn.y+y})
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function readPos(data)
{
    positionn=data.val()
    ball.x=positionn.x
    ball.y=positionn.y
}