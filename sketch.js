var box;

function setup() {
  createCanvas(600, 500);
  box = createSprite(200, 200, 40, 40);
  box.shapeColor = color("Yellow");
  box.stroke = color(0);
  box.strokeWeight = 2;
}

function draw() {
  background("Green");

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    box.shapeColor = color(random(255), random(255), random(255));
  }

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
  }

  drawSprites();
}
