class Game {
constructor(){

}

getState(){
var readgameState = database.ref ('gameState')
readgameState.on("value",function(data){
gameState = data.val()

})



}
update (state){
database.ref('/').update(
{gameState:state})

}
 async start(){
if(gameState===0){
player=new Player();
var playerCountRef=await database.ref('playerCount').once("value")
if(playerCountRef.exists()){
    playerrCount=playerCountRef.val()

player.getCount();
}
form=new Form();
form.display();
}

}
play(){
    form.hide()
    textSize(30)
    text("Game Start",120,100)
    player.getPlayerInfo();
    if(allPlayers!==undefined){
        var displayPosition = 130;
    
    for (var plr in  allPlayers){


    if(plr==="player"+player.index){
Fill("red")

    }
    else{
        fill("black")
    }
    displayPosition = displayPosition + 20
    textSize ( 15)
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50
player.update()
}
}
}