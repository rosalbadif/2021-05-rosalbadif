var input
var button1
var button2
var button3
var button4
var clicks = 0
let milk
let eggs
let butter
let bread

let myColor ="white"
let myUsers =[]

const urlString = window.location.href;
const url = new URL(urlString);
let userParameter = url.searchParams.get("currentUser");

//get username
//let userParameter

//SOCKET ----------
let clientSocket = io();

clientSocket.on ("connect", newConnection)
clientSocket.on ("mouseBroadcast", newBroadcast)
clientSocket.on("color", setColor)
clientSocket.on("userBroadcast", addUser)


function newConnection() {
  console.log(clientSocket.id)
}

function newBroadcast(data){
  console.log(data)

}

function setColor (assignedColor){
  myColor = assignedColor;

  let message = {
    name: userParameter,
    color: myColor
  }
  clientSocket.emit ("username", message)
}

function addUser(data){
  myUsers.push(data)
}

//SKETCH ----------
function preload(){
  // page = loadImage("./assets/riquadro.png")
  milk = loadImage("./assets/latte.png")
  eggs = loadImage("./assets/uova.png")
  butter = loadImage("./assets/burro.png")
  bread = loadImage("./assets/pane.png")
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

//BUTTONS
  
   button1 = createImg ("./assets/latte.png")
   button1.size(30,30)
   button1.position(50,150)
   button1.mouseClicked (latte)
 
   button2 = createImg ("./assets/uova.png")
   button2.size(30,30)
   button2.position(50,200)
   button2.mouseClicked(uova)
 
   button3 = createImg ("./assets/burro.png")
   button3.size(30,30)
   button3.position(50,250)
   button3.mouseClicked (burro)
 
   button4 = createImg ("./assets/pane.png")
   button4.size(30,30)
   button4.position(50,300)
   button4.mouseClicked (pane)
   //button4.doubleClicked ()
}

function draw() {
 let username = userParameter
 let currentColor = myColor


 //text (usermame, 400, 100)
}


function latte(){
  fill(myColor)
  textSize(20)
  text("latte", 330,180+clicks*30)

}

function uova(){
  fill("blue")
  textSize(20)
  text("uova", 330,180+clicks*30)
}

function burro(){
  fill("blue")
  textSize(20)
  text("burro", 330,180+clicks*30)
}

function pane(){
  fill("blue")
  textSize(20)
  text("pane", 330,180+clicks*30)
}

function mouseClicked(){
  clicks ++
}

function doubleClicked(){
  
}

// function mouseMoved (){
//   let message = {
//     x:mouseX,
//     y:mouseY,
    // color: currentColor,
  //}

  //clientSocket.emit ("mouse", message)
//}

