class Ground { //Blueprint for the object 
    constructor(x,y,width,height) {
      var options = {
          isStatic: true// It helps the object stay on the canvas or game
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; //this means whatever is the current object
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);//always make sure it is at the center 
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };