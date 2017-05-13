function robot(x, y, right, left, rightbound, leftbound) {
    this.x = x;
    this.y = y;
    this.right = right;
    this.left = left;
    this.rightbound = rightbound;
    this.leftbound = leftbound;
    this.delay_on = 0;

    this.stop_time = 0;
    human.call(this, x, y, right, left, rightbound, leftbound);
    //Delay time for the robot
    this.delay = 1.2;
    this.waiting = 0;
    this.update = function() {

        //robot_speed = 10;

        if (ball1.robot === 1) {

            this.dir = 1;
            this.show();




            //Introduce delay when the robot is at the right
            if (this.delay_on == 1) {

                if (this.waiting == 0) {
                    this.stop_time = counter + this.delay;
                    console.log('robot resumes!' + counter + ' ' + this.stop_time);
                    this.waiting = 1;
                }

                if (counter <= this.stop_time) {
                    robot_speed = 0;
                    console.log('robot is stopped!' + counter);


                } else {
                    robot_speed = 10;
                    this.delay_on = 0;
                    console.log('robot starts!!' + counter)
                    this.waiting = 0
                }
            }




            if (this.x + this.width <= this.rightbound - this.width) {
                this.x += robot_speed;
            } else {

                this.x = this.rightbound - this.width - 5

            }

        }
        //If the robot does not have the ball, go to the mid line
        if (ball1.x >= mid && ball1.robot == 0) {

            this.delay_on = 1
            this.dir = -1;
            if (this.x - 5 >= this.leftbound + this.width) {
                this.x -= robot_speed;


                andy.show();

            } else {

                this.x = this.leftbound + 45;
            }
        }

        if (ball1.robot == 0) {
            this.delay_on = 1
            this.dir = -1
            if (this.x - 5 >= this.leftbound + this.width) {
                this.x -= robot_speed;
            } else {

                this.x = this.leftbound + 45;
            }

        }



    }


}