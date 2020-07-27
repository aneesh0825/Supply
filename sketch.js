var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 bin1 = createSprite(500,height-70, 10,50);
	 bin2 = createSprite (550, 650, 100,10);
	 bin3=createSprite(600,height-70,10,50);
	 /*
	bin1 = new Bin (500,height-70, 10,50);
	bin2 = new Bin (550, 650, 100,10);
	bin3 = new Bin (600,height-70,10,50);
	*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  /*
	bin1.display();
	bin2.display();
	bin3.display();
	*/
}

function keyPressed() {
	if(keyCode === LEFT_ARROW) {
		helicopterSprite.x -= 20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}
	if(keyCode === RIGHT_ARROW) {
		helicopterSprite.x += 20;
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



