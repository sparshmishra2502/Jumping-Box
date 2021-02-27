var block1,block2,block3,block4;
var music;
var ball;
var edges;	
	
	function preload(){

	    music = loadSound("music.mp3");
	}
	
	
	function setup(){
	    createCanvas(800,600);

	    //create 4 different surfaces
	    
	    block1=createSprite(0,580,360,30);
	    block1.shapeColor="red";
	    block2=createSprite(295,580,260,30);
	    block2.shapeColor="blue";
	    block3=createSprite(515,580,200,30);
	    block3.shapeColor="green"
	    block4=createSprite(740,580,250,30);
	    block4.shapeColor="yellow";
	    //create box sprite and give velocity

	    ball=createSprite(random(20,750),300,30,30);
		ball.shapecolor = rgb(255,255,255);
	    ball.velocityX=4
	    ball.velocityY=9; 
	    
	    
	}
	
	
	function draw() {
	    background("pink");
	    //create edgeSprite
		edges=createEdgeSprites();
		ball.bounceOff(edges);
	    
	   if(block1.isTouching(ball)&& ball.bounceOff(block1)){
	       ball.shapeColor="red";
	       music.play();
	   }
	   if(block2.isTouching(ball)&& ball.bounceOff(block2)){
	       ball.shapeColor="blue";
	       music.stop();
	   }
	   if(block3.isTouching(ball)&& ball.bounceOff(block3)){
	       ball.shapeColor="green";
	       
	   }
	   if(block4.isTouching(ball)&& ball.bounceOff(block4)){
	       ball.shapeColor="yellow";
	       
	   }

         //add condition to check if box touching surface and make it box
	    drawSprites();
	}
	
