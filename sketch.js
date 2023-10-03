function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black")
  fill(0)
}

function draw() {


}
function mouseClicked(){
fill(random(255),200,100)
ellipse(random(mouseX),mouseY,200,200)
}


function mouseMoved(){
  noStroke()
  fill(random(200,100,20))
  rect (0,0, mouseX, mouseY)
}