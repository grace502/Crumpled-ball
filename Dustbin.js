class Dustbin { //Blueprint for the object 
    constructor(x,y,width,height) {
      var options = {
         restitution: 0.8, // It puts bouncy properties on the object
         friction: 1.0,
         density: 10, //It put weight and mass into the object

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; //this means whatever is the current object
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push (); //It apply new settings for the object
      translate (pos.x, pos.y); 
      rotate (angle);
      rectMode(CENTER);//always make sure it is at the center 
      fill("#21618C");
      rect(0, 0, this.width, this.height);
      pop (); //For it to go back to the original setting
    }
  };