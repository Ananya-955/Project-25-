var ground, dustbin1, paper;
var world, engine ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	paper=new Paper(160,670,30);
	dustbin1=new Dustbin(550,620,300,100);
	ground=new Ground(400,680,800,10);

	



	//Create a Ground
	//ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );
	//ground.shapeColor="brown"; 
	//World.add(world, ground);
	 


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  ground.display();
  rectMode(CENTER);
  //fill("brown");
 // rect(ground.position.x, ground.position.y, ground.width, ground.height);
  
  //drawSprites();
}

function keyPressed() {
	if (keyCode=== UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.position , {x:110, y:-110});
	}
}

