//Petite application de chat
const express = require('express');
let app = express();
const fs = require('fs');
let http = require('http');
let server = http.createServer(app); //je créer une instance de serveur avec http.createServer
const { Server } = require('socket.io');
const io = new Server(server);

const port = 8080;

//Affiche mon fichier HTML 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/chat.html");
});

io.on("connection", (socket) => {
    console.log("User connection established");
    socket.on("disconnect", () => { //l'user ne se déconnecte que quand sa connexion a cessé
        console.log("User disconnected"); // quand la connexion est off .on 'disconnect' fonction callback console log deconnecté
    });
});
 
server.listen(port, () => {
    console.log('\nServer launched at http://localhost:' + port);
});

