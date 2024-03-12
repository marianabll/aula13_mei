var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage
var cacto, cacto1, cacto2, cacto3, cacto4, cacto5, cacto6


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  
  cacto1 = loadImage("obstacle1.png")
  cacto2 = loadImage("obstacle2.png")
  cacto3 = loadImage("obstacle3.png")
  cacto4 = loadImage("obstacle4.png")
  cacto5 = loadImage("obstacle5.png")
  cacto6 = loadImage("obstacle6.png")

}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //definir cor do plano de fundo
  background(20);

  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space") && trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  criarNuvens()
  
  drawSprites();
  
}





function criarNuvens() {

  //se o número do frame for divisível por 60:
  if ( frameCount % 60 === 0 ) {
    y = random(50, 150)
    cloud = createSprite(600, y, 40, 10)
    cloud.addImage(cloudImage)
    cloud.scale = 0.6
    cloud.velocityX = -3

    cloud.lifetime = 220
  }
}