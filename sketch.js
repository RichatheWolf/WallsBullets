/*
var spr1 , spr2;
var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400,200,80,30);
  spr1 = createSprite(250,100,30,40);
  spr2 = createSprite(100,300,20,40);
  spr1.shapeColor = "deepskyblue";
  spr2.shapeColor = "purple";
  fixedrect.shapeColor = "honeydew";
  movingrect.shapeColor = "firebrick";
  spr2.velocityX = 2;
  spr2.velocityY = -2;
}

function draw() {
  background("black"); 
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
   /*if (isTouching(movingrect, spr1)) {
    spr1.shapeColor="green";
    movingrect.shapeColor="green";
  }
  else {
  spr1.shapeColor="depskyblue"
  movingrect.shapeColor = "firebrick";
  }
  bounceOff(movingrect, spr2);
  drawSprites();
}
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite (50,200,50,50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.velocityX = 0;
  car.velocityX = speed;
}

function draw() {
  background("black");
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation > 180) {
        car.shapeColor = "red";
    }
    if (deformation < 180 && deformation > 90) {
        car.shapeColor = "yellow";
    }
    if (deformation < 90){
        car.shapeColor = "green";
    }
  }
  drawSprites();
}
*/
var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite (50, 200, 30, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  bullet.shapeColor = "white";
  wall.shapeColor = color(80, 80, 80);
  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = "red";
    }
    else {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}


  