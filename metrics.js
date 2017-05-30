function collect_metrics(){
  
 
  
      if (vincent.speed===0){
            human_idle +=Math.round((float(1 /20)) * 100) / 100;
    }
    
    
    
    if(andy.speed===0){
        rect(350,0,10,10)
        r_idle +=Math.round((float(1 /20)) * 100) / 100;
      
    }

    if(andy.speed!=0 && vincent.speed!=0){
        rect(350,0,10,10)
        con_act +=Math.round((float(1 /20)) * 100) / 100;

    }




    text('Human Idle : '+ ((human_idle)*100/counter).toFixed(2)+'%',200,370)
    rect(mid - 15, 2, 1, height)
    rect(mid, 2, 1, height);

    text('Robot Idle : '+ ((r_idle)*100/counter).toFixed(2)+'%',400,370)

    text('Concurent Activity : '+ ((con_act)*100/counter).toFixed(2)+'%',600,370)
    
    
    //zconsole.log("Idle, "+((human_idle)*100/counter).toFixed(2),",", counter)
}