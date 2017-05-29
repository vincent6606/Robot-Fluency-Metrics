var s;
var scl = 20;
var vincent;
var food;
var img;
var x = 100;

var mid = 400;

var robot_speed = 10;
var counter = 0;

//Metrics Variables
var prev_idle = 0
var human_idle = 0
var r_idle = 0;


var t_init = 0
var FrameRate = 0;

function setup() {
    robot_bound = 800 //Boundary of the robot
    createCanvas(2000, 400);
    vincent = new human(100, 400, RIGHT_ARROW, LEFT_ARROW, mid, 0);
    andy = new robot(mid, 400, 68, 65, robot_bound, mid);
    andy.x = robot_bound;
    ball1 = new ball(200, int(height / 2) - 20);
    frameRate(20);
    t_init = millis();
    counter = 0;
    FrameRate = getFrameRate();

    //Set timer interval, increments time every second
    //setInterval(timeIt,1000);


    //Create slider for robot speed
    rSlider = createSlider(0, 30, 10);
    rSlider.position(20, 390);




    // Create the plot
		plot = new GPlot(this);
		plot.setPos(900, 30);
    plot.setDim(350, 250);
    plot.setPoints(human_idle);
    // Set the plot title and the axis labels
		plot.setTitleText("Human Idle Time");
		plot.getXAxis().setAxisLabelText("Simulation time");
		plot.getYAxis().setAxisLabelText("Idle time as % of total");
    plot.activatePanning();
    
}

function timeIt() {
    counter++;
}

function v_idle() {
    if (ball1.human === 1) { //we want it to match
        setTimeout(v_idle, 1); //wait 50 millisecnds then recheck
        return;
    }
    vincent.idle_start = counter;
    text(vincent.idle_start, 600, 400)
  
}




function draw() {

    //Increment the timer every 1/frameRate seconds
    FrameRate = getFrameRate();

    counter = Math.round((float(1 /20) + counter) * 100) / 100;
    background(13);
    //Attach the slider value to robot speed
    //The robot speed is set to slider first, but the robot
    //could overwrite the speed during delay
    andy.speed = rSlider.value();

    vincent.update();
    vincent.show();
    ball1.show();


    andy.show();

    andy.update();
    rect(800, 2, 1, 600);

    fill(255);
    textSize(20);
    text('Time passed: ' + counter, 900, 25);
    text('Robot', 600, 50);
    text('Human', 200, 50);
   
    fill(255);
    textSize(20);
    text('Robot Speed: ' + rSlider.value(), 10, 370)
    
     text('Robot Current Speed: ' + andy.speed, 30, 350)

    collect_metrics();
    
    
    rect(mid - 15, 2, 1, height)
    rect(mid, 2, 1, height);
    plot.beginDraw();
		plot.drawBackground();
		plot.drawBox();
		plot.drawXAxis();
		plot.drawYAxis();
		plot.drawTopAxis();
		plot.addPoint(counter,(human_idle)*100/counter);
		//plot.getMainLayer().drawPoints();
		//plot.getLayer("surface").drawFilledContour(GPlot.HORIZONTAL, 0);
		plot.removePoint(0);
		//plot.removePoint(plot.getPointsRef().length - 1);
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