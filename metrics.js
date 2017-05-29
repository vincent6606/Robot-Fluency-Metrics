function collect_metrics(){
  
 
  
      if (ball1.robot===1){
            human_idle +=Math.round((float(1 /20)) * 100) / 100;
    }
    
    
    
    if(andy.speed===0){
        rect(350,0,10,10)
        r_idle +=Math.round((float(1 /20)) * 100) / 100;
      
    }
    
    
    text('Human Idle : '+ ((human_idle)*100/counter).toFixed(2)+'%',200,370)
    rect(mid - 15, 2, 1, height)
    rect(mid, 2, 1, height);

    text('Robot Idle : '+ ((r_idle)*100/counter).toFixed(2)+'%',400,370)

    
    
    
    console.log("Idle, "+((human_idle)*100/counter).toFixed(2),",", counter)
}