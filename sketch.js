function setup() {
  createCanvas(1000, 1000);
background("black")
}

function draw() {
stroke("white")
fill("gray")
if(mouseIsPressed){
rect(mouseX, mouseY, 10, 10)
}
}
