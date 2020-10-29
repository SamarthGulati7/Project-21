var bullet,wall;
var thickness,weight,speed;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,thickness,200);
  wall.shapeColor=80,80,80;

}

function draw() {
  background(0);  

if(wall.x-bullet.x<bullet.width/2+wall.width/2){

bullet.velocityX=0;

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){

  wall.shapeColor="red";
  fill("blue");
  text("The wall is weak",750,200);
}

if(damage<10){

  wall.shapeColor="green";
  fill("blue");
  text("The wall is strong",750,200);
}

}

  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x + lbullet.width
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){

 return true;

}

  return false;

}