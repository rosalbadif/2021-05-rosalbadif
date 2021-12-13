var input
var button



const urlString = window.location.href;
const url = new URL(urlString);
console.log (url)

function setup() {
    createCanvas(windowWidth, windowHeight)
  input= createInput("").attribute("placeholder", "type your name")
  input.position(windowWidth/2-75, 460)
  input.style("background-color:orange")
  input.style("color:deepPink")


  button = createButton ("go")
  button.style("background-color:orange")
  button.style("color:deepPink")
  button.position(windowWidth/2-20, 600 )
  button.style ("border-radius:10px")
  
  button.mouseClicked(go)
}

function draw (){
    background("white")
    person=input.value()

    noStroke()
    textAlign(CENTER)
    textSize(100)
    fill("orange")
    textFont ("dongle")
    text ("hello "+ person, windowWidth/2, 100)
  
    textSize(30)
    text("let's get a shopping list", windowWidth/2, 400)
  
    // textSize(50)
    // text(input.value(), windowWidth/2, 430 )
  
    
  }
  
  
  function go(){
  
      window.open(url + "sketch.html?currentUser=" + person, "_self")
  }
