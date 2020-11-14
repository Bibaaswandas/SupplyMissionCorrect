var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, redA, redB, redC;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	
	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	redA = createSprite(400,650,200,20);
	redA.shapeColor="red";
	redB = createSprite(290,610,20,100);
	redB.shapeColor="red";
	redC = createSprite(510,610,20,100);
	redC.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	helicopterSprite=createSprite(400, 200, 10,10);
	
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;


	fill ("red");
	 red1 = Bodies.rectangle(400,640,1200,20, {isStatic:true});
	 World.add(world,red1);
	 fill ("red");
	 red2 = Bodies.rectangle(290,610,20,100);
	 World.add(world,red2);
	 fill ("red");
	 red3 = Bodies.rectangle(510,610,20,100);
	 World.add(world,red3);

	 ground = createSprite(400,665,800,15);
	 ground.shapeColor = "white";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 




  if(packageBody.position.y===red1.position.y){
	  Matter.Body.setStatic(packageBody, true);
  }
 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	Matter.Body.setStatic(packageBody, false);
 }
}



