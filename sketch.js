const Engine = Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var myEngine,myWorld,ground,ball

function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  var ground_options = {
   isStatic:true
  }
  var ball_options={
    restitution:1
  }
  ground=Bodies.rectangle(200,380,400,20,ground_options)
  ball=Bodies.circle(100,150,20,ball_options)
  World.add(myWorld,ground)
  World.add(myWorld,ball)
}

function draw() {
  background(0);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}