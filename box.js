class Box{
    constructor(x,y,width,height){


        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }


    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()      //captures the new setting.
        translate(pos.x,pos.y);       //> to change the 0 of the axis to a given x and y position. 
        rotate(angle);
        rectMode(CENTER)
        stroke("green")
        strokeWeight(5)
        fill(255);
        rect(0,0,this.width,this.height)
        pop();  // reverts to the old setting.

    }



}