var pathImg, path;
var runner, runnerImg;
var energyDrinkImg, energyDinrk, energyDinrkGroup;
var coinImg, coin, coinGroup;
var bombImg, bomb, bombGroup;
var gameState = "play"

function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 runnerImg = loadAnimation("Runner-1.png", "runner-2.png");
 energyDrinkImg = loadImage("energyDrink.png");
 coinImg = loadImage("coin.png");
 bombImg = loadImage("bomb.png");
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path = createSprite(500,500);
  path.addImage("path", pathImg);
  path.velocityY = 1;

  energyDrinksGroup = new Group();
  coinGroup = new Group();
  bombGroup = new Group();

  runner = createSprite(200,200,50,50);
  runner.scale = 0.3;
  runner.addAnimation("runner", runnerImg);
}

function draw() {
  background(0);
  if(gameState === "play") {
    if(keyDown("left")){
      runner.x = runner.x - 3;
    }

    if(keyDown("right")){
      runner.x = runner.x + 3;
    }

    if(keyDown("space")){
      runner.velocityY = -10;
    }

    runner.velocityY = runner.velocityY + 0.8

    if(path.y > 400){
      path.y = 300
    }
  }
}
