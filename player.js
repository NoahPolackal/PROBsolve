class Player {
    constructor(){
      this.index = []
      this.distance = 0
      this.name = []
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }

   static infoplayer(){
   var playerInfoRef = databse.ref("players")
   playerInfoRef.on("value",(data)=>{
     allplayers = data.val})
   }
  }
  
  