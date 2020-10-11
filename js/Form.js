class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h2");
        this.reset = createButton("RESET");
    }

display(){
    var title = createElement("h2");
    title.html("Car racing Game");
    title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2-0, displayHeight/2-58);
    this.reset.position(displayWidth-100, 30);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();


        player.name = this.input.value()
        playerCount+=1;
        player.index = playerCount;
        
        //call functions of player class to update name and count in db
        player.update();
        player.updateCount(playerCount);

        //welcome message for player
        this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2-40, displayHeight/2-80);
    })
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0);

    })

}
hide(){
this.greeting.hide()
this.input.hide()
this.button.hide()

}

}