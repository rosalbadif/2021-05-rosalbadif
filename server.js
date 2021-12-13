//will contain all the information that will run on our server 
console.log("up and running")

let express = require("express") //loaded express library
let app= express() //activated express

//port thet we will use
let port = 3000
//let port = process.env.PORT || 3000; //run it on the heroku port OR on 3000
let server = app.listen(port)

console.log("Server is running on http://localhost:" + port)

app.use(express.static("public")) //all the file in the folder won't change over time 

let serverSocket = require("socket.io")

//we have to tell socket what server we are using 
let io = serverSocket(server) //already called the server in the line 10
io.on("connection", newConnection) //when you see a new "CONNECTION" (standard name) run the newConnection function

// CLIENT CONNECTING TO OUR SERVER:
function newConnection(newSocket) { //passes a data file containing all the information about the connection called newSocket
   console.log("newSocket: " + newSocket.id) //gives back the id of every user accessing the server
   
   //assign client a color
   let clientColor = getRandomColor
   serverSocket.emit ("color", clientColor)

   newSocket.on("mouse", mouseMessage) //to send the information from the client to the server
   newSocket.on("username", usernameMessage)

    function usernameMessage (dataReceived){
       console.log(newSocket.id)
       newSocket.broadcast.emit("mouseBroadcast", dataReceived)
   }

    function mouseMessage(dataReceived){
        console.log(dataReceived)
        newSocket.broadcast.emit("mouseBroadcast", dataReceived) //to send back the information from the server to all the other clients
    }
 }
 //DEFINE RANDOM COLOR
 function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
      }
    return color;
   
}