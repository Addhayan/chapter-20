var fr,mr

function setup() {
  createCanvas(1200,800);
  fr = createSprite(400,100,50,80);
  fr.shapeColor = "green"
  fr.velocityY = 5;

  mr = createSprite(400,800,80,30)
  mr.shapeColor = "green";
  mr.velocityY = -5;
}

function draw() {
  background(0);  

if(fr.x - mr.x < fr.width/2 + mr.width/2 &&
  mr.x - fr.x < mr.width/2 + fr.width/2 ){
    mr.velocityX = mr.velocityX *(-1);
    fr.velocityX = fr.velocityX *(-1);
  }

  if(fr.y - mr.y < fr.height/2 + mr.height/2 &&
    mr.y - fr.y < mr.height/2 + fr.height/2 ){
      mr.velocityY = mr.velocityY *(-1);
      fr.velocityY = fr.velocityY *(-1);
    }
  drawSprites();
}