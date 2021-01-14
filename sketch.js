var kite1,kite2,background,kite1Image,kite2Image,backgroundImage;


function preload(){

   backgroundImage = loadImage("background1.png");

}



function  setup(){
   createCanvas(1200,600); 

    background = createSprite(600,350,400,400);
    background.addImage("BACKGROUND",backgroundImage);

}

function draw(){


drawSprites();

}