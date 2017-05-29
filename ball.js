function ball(x, y) {
    this.x = x;
    this.y = y;
    this.human = 0;
    this.robot = 0;

    this.width = scl;
    this.dir = 1

    this.color = 255


    this.show = function() {


        if (this.x >= vincent.rightbound - 15 && this.x <= vincent.rightbound + 5) {
            vincent.idle_start = counter;
        }

        rectMode(CENTER);
        fill(255, 255, 1);
        if (abs((vincent.x + 40 * vincent.dir) - this.x) <= 15 && this.dir == 1 || (this.human && this.robot == 0)) {
            this.human = 1;
            this.robot = 0
            if (vincent.dir != this.dir) {
                this.dir = vincent.dir
            }
            this.x = vincent.x + 60 * this.dir
        }



        if (abs((andy.x + 40 * andy.dir) - this.x) <= 15 || (this.robot && this.human == 0) || this.robot == 1) {
            this.robot = 1;
            this.human = 0
            if (andy.dir != this.dir) {
                this.dir = andy.dir
            }
            this.x = andy.x + 60 * this.dir
        }




        rectMode(CENTER)
        fill(this.color, 1, 100);
        rect(this.x, this.y, scl, scl);

        //rect (width/2,1,2,height);
        rectMode(CORNER);
        if (this.robot == 1) {
            //console.log('Human Stopped')
            rectMode(CENTER)
            //Draw a red rectangle 
            fill(255, 1, 1);
            rect(mid-5, 10, 50, scl);
            rectMode(CORNER);
        }



        if (this.x >= andy.rightbound) {

            //console.log("new ball")
            //console.log('move' + counter)

            // vincent.waited = Math.round(((counter) - vincent.idle_start) * 100) / 100
            //
             //human_idle += human_idle
            // text('Human Idle : '+ human_idle,200,370)

            prev_idle += human_idle
            //console.log('waited' + vincent.waited);

            this.x = random(200);
            //console.log(this.x)
            this.human = 0
            this.robot = 0
        }





    }


    this.offscreen = function(){
        return this.x>=andy.rightbound

    }




}