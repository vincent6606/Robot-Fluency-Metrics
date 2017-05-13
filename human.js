function human(x,y,right,left,rightbound,leftbound){
  this.x = x;
  this.y = y;
  this.dir=-1;
  
  //Left and right boundaries for the players
  this.leftbound = leftbound;
  this.rightbound = rightbound;
  
  this.width = 45;
  this.height = int(height/2)-20;

  //Key Codes for left and right movements
  this.left = left;
  this.right = right;
  
  
  //Vincent's speed
  this.vincent_speed = 0;
  
  //Statistics  
  this.idle_start = 0;
  this.waited = 0
  
  this.show = function(){
    noStroke();
    fill(247, 214, 152);
    ellipse(this.x, int(height/2-55), 35, 35);     // Head
    ellipse(this.x+40*this.dir, int(height/2)-20, 20, 20);     // Hand
    
    fill(40, 57, 206);
    rect(this.x-20, int(height/2)-40, 45, 70);            // Body
    rect((this.x-30)+10*this.dir, int(height/2-30), 60, 20);  // Arm
    triangle(this.x-20* this.dir, int(height/2+10), // Foot
    this.x-20* this.dir, int(height/2+60),
    this.x+20* this.dir, int(height/2+60));
    
    fill(250, 238, 10);
    arc(this.x, int(height/2-57), 40, 40, PI, PI*2);  // Helmet
    rect((this.x-25)+10*this.dir, int(height/2-57), 50, 5);  // Visor
}



this.update = function(){
    //The human moves towards the robot
   if ((ball1.x>=(this.x+40*this.dir) && ball1.robot==0) || ball1.human==1) {
     //console.log("going right");
    this.dir=1;
    if(this.x+this.width<=this.rightbound-this.width){
      this.vincent_speed = 10
      this.x +=10;  
    }else{
      this.x=this.rightbound-this.width-5;
      this.vincent_speed = 0
      this.idle_start = counter;
      
      
    }
   
  } 
  //Human moves to the ball
  if (ball1.x<this.x+40*this.dir && ball1.human==0) {

    this.dir = Math.sign(ball1.x-this.x)
    if(this.x-5>=this.leftbound+this.width){
    this.vincent_speed = 10
    this.x-=10;  
    }else{
      this.vincent_speed = 0
    this.x=this.leftbound+45;  
    this.x+=this.vincent_speed;
    }
   }  
   
   
   
}


  




  
  
}