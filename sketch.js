var bg,bgImg;
var robo,roboImg;
var player,playerImg;
var roboGroup;

function preload(){
  bgImg = loadImage("images/outpost.png");
  roboImg = loadImage("images/robo.png");
  playerImg = loadImage("images/player.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  robo=createSprite(400,500);
  robo.addImage(roboImg);
  robo.scale=0.05;

  player=createSprite(150,windowHeight-300);
  player.addImage(playerImg);
  player.scale=0.5;

  bgImg.scale=0.5;

  invisibleGround = createSprite(250,750,2500,10);
//invisibleGround.visible = false;
roboGroup = new Group();
}

function draw(){
  background(bgImg);
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+3
  }
  if(keyDown("space") && player.y >= 159) {
    player.velocityY = -12;
  }

  player.velocityY = player.velocityY + 0.8
  player.collide(invisibleGround);
  spawnRobos();
  drawSprites();

}

function spawnRobos() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var robo = createSprite(1200,120,40,10);
    robo.y = Math.round(random(0,1200));
    robo.addImage(roboImg);
    robo.scale = 0.05;
    robo.velocityX = -3;
    
     //assign lifetime to the variable
    robo.lifetime = 800;
    
    //adjust the depth
    robo.depth = player.depth;
    player.depth = player.depth + 1;
    
    //add each cloud to the group
    roboGroup.add(robo);
  }
  
}