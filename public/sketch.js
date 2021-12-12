var input
var button1
var button2
var button3
var button4

var clicks = 0
// let page
// let milk
// let eggs
// let butter
//let bread


let clientSocket=io()

clientSocket.on ("connect", newConnection)
clientSocket.on ("mouseBroadcast", newBroadcast)
clientSocket.on("color", setColor)
clientSocket.on ("newUser", newUser)

function newUser (newUserColor) {

  push()
  fill("black")
  textAlign (CENTER)
  fill(newUserColor)
  text ("new user joined:" + newUserColor, width/2, height/2)
  pop()
  
}

function newConnection() {
  console.log(clientSocket.id)
}

function newBroadcast(data){
  console.log(data)

}

function preload(){
  // page = loadImage("./assets/riquadro.png")
  // milk = loadImage("./assets/latte.png")
  // eggs = loadImage("./assets/uova.png")
  // butter = loadImage("./assets/burro.png")
  //bread = loadImage("./assets/pane.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightCyan");
  fill("white")
  stroke("blue")
  rect(300,150,windowWidth/2, windowHeight/2)

  //TITLE
  push()
  fill("white")
  stroke("blue")
  strokeWeight(5)
  textAlign(CENTER)
  textSize (40)
  text ("lista della spesa", width/2, 75)
  pop()
  // input= createInput("").attribute("placeholder", "write your story")
  // input.position(windowWidth/2-150, windowHeight/2-150)
  // input.style("background-color: white")
  // input.style("color:blue")
  // input.style("stroke:blue")
  // input.size (400,400)

  //BUTTONS
  button1 = createImg ("./assets/latte.png")
  button1.size(30,30)
  button1.position(50,150)
  button1.mousePressed (latte)

  button2 = createImg ("./assets/uova.png")
  button2.size(30,30)
  button2.position(50,200)
  button2.mousePressed (uova)

  button3 = createImg ("./assets/burro.png")
  button3.size(30,30)
  button3.position(50,250)
  button3.mousePressed (burro)

  button4 = createImg ("./assets/pane.png")
  button4.size(30,30)
  button4.position(50,300)
  button4.mousePressed (pane)



}

function draw() {
  // imageMode(CENTER)
  // image(page, 300, 100, windowWidth, windowHeight)
  //fill("blue")
  //circle(mouseX, mouseY, 20)
  
}

function latte(){
  fill(clientColor)
  textSize(30)
  text("latte", 330,180+clicks*30)
}

function uova(){
  fill(clientColor)
  textSize(30)
  text("uova", 330,180+clicks*30)
}

function burro(){
  fill(clientColor)
  textSize(20)
  text("burro", 330,180+clicks*30)
}

function pane(){
  fill("red")
  textSize(20)
  text("pane", 330,180+clicks*30)
}

function mousePressed(){
  clicks ++
}

function mouseMoved (){
  let message = {
    x:mouseX,
    y:mouseY
  }

  clientSocket.emit ("mouse", message)
}

