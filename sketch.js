
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var scl = 20;
var vincent;
var food;
var img;
var x = 100;

var mid = 400;

var robot_speed = 10;
var counter = 0;
//Robot's delay
var delay = 300


var human_idle = 0

 var t_init =0


function setup() {
  robot_bound = 800 //Boundary of the robot
  createCanvas(2000, 400);
  vincent = new human(100,400,RIGHT_ARROW,LEFT_ARROW,mid,0);
  andy = new robot(mid,400,68,65,robot_bound,mid);
  andy.x = robot_bound;
  ball1 = new ball(200, int(height/2)-20);
  frameRate(20);
  t_init = millis();
 
 
 //Set timer interval, increments time every second
  //setInterval(timeIt,1000);
  
  
  //Create slider for robot speed
  rSlider = createSlider(0, 30, 10);
  rSlider.position(20, 390);
 
}

  function timeIt(){
    counter++;
  }

  function v_idle() {
    if(ball1.human===1) {//we want it to match
        setTimeout(v_idle, 1);//wait 50 millisecnds then recheck
        return;
    }
    vincent.idle_start = counter;
    text(vincent.idle_start,600,400)
    //real action
}

//doStuff();



function draw() {
  
  //Increment the timer every 1/60 seconds 
  counter=Math.round((1/60+counter)*100)/100
  background(13);
  rect(mid,10,1,height)

  //v_idle();

  vincent.update();
  vincent.show();
  ball1.show();
  
  // if(vincent.vincent_speed==0){
  //   console.log('Vincent stops')
  // }
  
  
  //   if(vincent.vincent_speed!=0){
  //   console.log('Vincent runs')
  // }

  andy.show()

  andy.update()
  rect(190,2,1,600)
  rect(800,2,1,600)
  
  fill(255);
  textSize(20);
  text('Time passed: '+counter, 900, 25);
  text('Robot',600,50)
  text('Human',200,50)
  
  
    robot_speed = rSlider.value();
    
     fill(255);
  textSize(20);
  text('Robot Speed: '+ robot_speed,10,370)
  text('Human Idle : '+ human_idle,200,370)
  
  
  rect(mid-15,2,1,600)
}




/*
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
    vincent.dir=1;
    vincent.x +=10;
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
    timer(255, 22, 1);
    rect(400, int(100/2-57), 50, 5); 
    vincent.dir=-1
    vincent.x-=10;
  } else if (keyCode === 87) {
    s2.dir(0, -1);
  } else if (keyCode === 83) {
    s2.dir(0, 1);
  } else if (keyCode === 68) {
    s2.dir(1, 0);
  } else if (keyCode === 65) {
    s2.dir(-1, 0);
  }
}

*/







