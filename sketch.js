var database;
var playerCount,allPlayers,car1,car2,car3,car4,cars,img1,img2,img3,img4;

var player, form, game;
var gameState= 0;
var distance = 0;






function preload(){
img1=loadImage("../images/car1.png")
img2=loadImage("../images/car2.png")
img3=loadImage("../images/car3.png")
img4=loadImage("../images/car4.png")
}





function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()

    //make object of game class
    game = new Game();
    game.getState();
    game.start();

}

   function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
        
    }
if(gameState===1){
    clear();                
    game.play();
}
}

