const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var  engine,world;
var object,ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;


var object_options={
  isStatic: true
}

var ground_options={
  isStatic:true
}

var ball_options={
  restitution:1.0
}

  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);

  ground=Bodies.rectangle(200,380,400,50,ground_options);
  World.add(world,ground);

  ball=Bodies.circle(200,150,20,ball_options);
  World.add(world,ball);



  console.log(object);
 // console.log(object.position.y);

}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
 // rect(object.position.x, object.position.y, 50, 50);
 
rect(ground.position.x,ground.position.y,400,50);
ellipseMode(RADIUS);

ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
} 