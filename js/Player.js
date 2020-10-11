class Player{

constructor(){
this.index = null;
this.distance = 0;
this.name = null;
}

//update player name and distance in db
update(){
//arvplayerIndex = "=players/player+ this.index;
  
 var playerIndex = "players/player" + this.index;
 database.ref(playerIndex).set({
       name:this.name,
       distance: this.distance
   });
}

//update playercount in db
 updateCount(count){
     
     database.ref('/').update({playerCount:count})
 }

 //get value of player count from database
 getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data)=>{
        playerCount = data.val();
    })

 }
 static getPlayerInfo(){
var playerInfoRef = database.ref('players')
playerInfoRef.on("value", (data)=>{
    allPlayers = data.val();
})
 }

}
