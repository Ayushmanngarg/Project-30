class polygon{
constructor(x,y,width,height){
    var prop1={
        restitution:0.5,
        friction:0.3,
        density:1.0
        
      }
      this.polygon = loadImage("polygon.png")
      this.box=Bodies.rectangle(x,y,width,height,prop1);
      this.width = width;
      this.height = height;
      World.add(world,this.box); 
}
display(){
    var pose = this.box.position;
    var angle = this.box.angle;
    push();
    translate(pose.x,pose.y);
    rotate(angle);
    fill("blue");
    imageMode(CENTER);
    image(this.polygon, 0,0,this.width,this.height);
    pop();
}


}