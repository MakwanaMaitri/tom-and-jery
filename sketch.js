var mouse, mouseAnimation, cat,catAnimation;
var garden, gardenImg;

function preload() {
    //load the images here
    cat = loadAnimation("cat1.png","cat1.png","cat1.png","cat4.png");
    mouse = loadAnimation("mouse1.png","mouse1.png","mouse1.png","mouse4.png");
 
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

   mouse= createSprite(500,500,20,50);
   mouse.addAnimation("Standing",mouseImg);

   cat = createSprite(600,300,10,30);
   cat.addAnimation("Running",catIng);

   garden = createSprite(999,700);
   garden.addImage("garden",gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImg);
        cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
         cat.changeAnimation("catRunning");
    }

}
