var background, backgroundImage;
var zombie, zombieImage;
function preload(){
    backgroundImage = loadImage("background_image.jpg");
    zombieImage = loadImage("zombie image (1).png");
}

function setup(){
    var canvas = createCanvas(600,40);
    background = createSprite(300,300);
    background.addImage(backgroundImage);
    background.velocityX = 1;
    background.scale = 2;
    zombie = createSprite(300,300,30,50);
    zombie.addImage(zombieImage);
}

function draw(){
    if(background.x<0){
     background.x = background.width/2;
     
    }
    drawSprites();
}