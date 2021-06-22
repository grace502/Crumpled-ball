class Paper { //Blueprint for the object 
    constructor(x,y,radius) {
      var options = {
          isStatic: false,// It helps the object stay on the canvas or game
          restitution:0.3,
          friction: 0.2,
          density:1.2,

      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      
      this.body = Bodies.circle(x,y,this.radius/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate(angle);

      ellipseMode(CENTER);//always make sure it is at the center 
      fill("#990066");
      ellipse(0, 0, this.radius, this.radius);
    }
  };