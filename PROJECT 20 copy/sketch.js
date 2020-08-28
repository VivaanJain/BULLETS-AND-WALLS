var thickness,wall;
var bullet,speed,weight,damage;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,50,50);
  
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);


wall=createSprite(600,200,thickness,height/2)



bullet.velocityX=speed;


}

function draw() {
  background(255,255,255);  
  wall.shapeColor=color(80,80,80);
  console.log(thickness)
  
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
 damage=0.5* weight*speed*speed/(thickness*thickness*thickness)
  }
console.log(damage);
if (damage>10)
{

wall.shapeColor=color(255,0,0);
}

if(damage<10)
{

wall.shapeColor=color(0,255,0);
}


  drawSprites();
}

function hasCollided(bullet,wall){
var bulletRightEdge=bullet.x+bullet.width/2;
 var wallLeftEdge=wall.x-wall.width/2;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
else

{
  return false;
}

}

