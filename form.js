class Form {
    constructor() {
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');
    }
   hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
   }
  
    display(){
      var title = createElement('h2')
      title.html("NEED FOR SPEED");
      title.position(400, 100);  
      this.input.position(350, 160);
      this.button.position(350, 200);

      this.button.mousePressed(()=>{
        
        this.input.hide();
        this.button.hide();
        player.name = input.value();
        player.index = playerCount;
        
        playerCount+=1;
        player.update()
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + player.name )
        this.greeting.position(130, 160)
      });
  
    }
  }
  