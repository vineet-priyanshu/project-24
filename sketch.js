
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function setup() {
	createCanvas(1200, 700);


    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("cyan")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1=new Paper(200,450,40);


    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    boxPosition=width/2-100;
	boxY=610;

    boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor="red";
	boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
    World.add(world,boxLeftBody);

	boxBaseSprite=createSprite(boxPosition+100,boxY+40,200,20);
	boxBaseSprite.shapeColor="red";
	boxBaseBody=Bodies.rectangle(boxPosition+100,boxY+25,200,20,{isStatic:true});
    World.add(world,boxBaseBody);

	boxLeftSprite=createSprite(boxPosition+200,boxY,20,100);
	boxLeftSprite.shapeColor="red";
	boxRightBody=Bodies.rectangle(boxPosition+180,boxY,20,100,{isStatic:true});
    World.add(world,boxRightBody);
    
    
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  
  paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55});
	}
}


