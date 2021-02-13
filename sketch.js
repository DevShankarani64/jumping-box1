var canvas;
var music;
var block1, block2, block3, block4, block5;
var bouncingBall;
var edges=createEdgeSprites;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(700,500,100,20);
    block1.shapeColor="red";
    block2=createSprite(550,500,100,20);
    block2.shapeColor="green";
    block3=createSprite(400,500,100,20);
    block3.shapeColor="blue";
    block4=createSprite(250,500,100,20);
    block4.shapeColor="pink";
    block5=createSprite(100,500,100,20);
    block5.shapeColor="yellow";

    bouncingBall=createSprite(200,100,40,40);
    bouncingBall.shapeColor="white";
    bouncingBall.velocityY=9;
    bouncingBall.velocityX=6;
    
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    music.play();

    edges=createEdgeSprites();
    bouncingBall.bounceOff(edges);

    if (bouncingBall.isTouching(block1) && bouncingBall.bounceOff(block1)){
     bouncingBall.shapeColor= rgb(255,0,0);
     bouncingBall.velocityX=0;
     bouncingBall.velocityY=0;

     music.stop();  
    }


    if (bouncingBall.isTouching(block2)&& bouncingBall.bounceOff(block2)){
        
        bouncingBall.shapeColor="green";
       }
      

       if (bouncingBall.isTouching(block3)&& bouncingBall.bounceOff(block3)){
       
        bouncingBall.shapeColor="blue";
       }
       

       if (bouncingBall.isTouching(block4)&& bouncingBall.bounceOff(block4)){
        
        bouncingBall.shapeColor=rgb(255,192,203);
       }


       if (bouncingBall.isTouching(block5)&& bouncingBall.bounceOff(block5)){
        
        bouncingBall.shapeColor= rgb (255,255,0);
       }


    

       
    drawSprites();

    
    //create edgeSprite
    
 
    


    //add condition to check if box touching surface and make it box
    }
