var monkey , monkey_running,monkey_collided
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  

  
  monkey = createSprite(150,500,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2
  
  ground = createSprite(300,567,9000000000000,15);
  ground.velocityX = -5
  ground.lifetime = 1000000
  
  
  
  
}
                                                 

function draw() {
background(255)
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
  
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnobstacles()
  spawnbanana()
  drawSprites();


}


function spawnbanana(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200; 
    banana.scale = 0.2
    //adjust the depth
  //  cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;s
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}

function spawnobstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,530,10,40);
   obstacle.velocityX = -5
   obstacle.addImage(obstacleImage)
   
    //generate random obstacles
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
   // obstaclesGroup.add(obstacle);
 }
}