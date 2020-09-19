var bullet,wall,thickness;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed = random(223,321);
  weight = random(40,82);

 bullet=createSprite(50, 200, 30, 5);
 bullet.shapeColor="white";
 bullet.velocityX= speed;
 
 wall = createSprite(1400,200,thickness,200);
 wall.shapeColor="grey";
}

function draw() {
  background("black"); 
  
 

  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  
  
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
 
  if(damage>10){
  wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
 wall.shapeColor=color(0,255,0);
  }
  console.log(damage);
  }

  /*if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*speed*weight*speed*speed)/22509;
   
    if(deformation>180){
     car.shapeColor="red";
  }
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
 }

 if(deformation<100){
  car.shapeColor="green";
}
console.log(deformation);
   }
   */
   drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
   
return true
 
}
 
return false;
 
}