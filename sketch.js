
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobDiametr = 40;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	bobObject1 = new bob(200,400,20);
	bobObject2 = new bob(240,400,20);
	bobObject3 = new bob(280,400,20);
	bobObject4 = new bob(320,400,20);
	bobObject5 = new bob(360,400,20);

	roof = new Ground(360,200,350,20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiametr*2,10);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiametr,10);
	rope3 = new Rope(bobObject3.body,roof.body,0,10);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiametr,10);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiametr*2,10);
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("magenta");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
	}
}
