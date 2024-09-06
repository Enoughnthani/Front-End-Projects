function Clock(){


 Frame= document.getElementById("MyCanvas");
 Cav= Frame.getContext("2d");
 Frame.width= 600;
 Frame.height= 600;
 x=Frame.width/2;
 y=Frame.height/2;

  now = new Date();

  hr= now.getHours();
  mn= now.getMinutes();
  sc= now.getSeconds();


  DrawCircle();
  DrawLines(360*(sc/60)+x-30,190,"black",2);
  DrawLines(360*(mn/60)+(sc/60)-90,180,"black",2);
  DrawLines(360*(hr/12)+(mn/60)*30-90,155,"black",2);

  DrawLines(360*(sc/60)+x+150,55,"black",2);
  DrawLines(360*(mn/60)+(sc/60)+90,45,"black",2);
  DrawLines(360*(hr/12)+(mn/60)*30+90,35,"black",2);

}


function DrawCircle(){
    
   //Big Circle  
    Cav.strokeStyle="black";
    Cav.fillStyle="white";
    Cav.beginPath();
    Cav.lineWidth=40;
    Cav.arc(x,y,210,180,0,Math.PI*2);
    Cav.stroke();
    Cav.fill();

   //small right Circle 
    Cav.beginPath();
    Cav.strokeStyle="black";
    Cav.lineWidth=2;
    Cav.arc(400,400,40,180,0,2*Math.PI);
    Cav.stroke();

    //Small left Circle
    Cav.beginPath();
    Cav.lineWidth=2;
    Cav.arc(200,400,40,180,0,2*Math.PI);
    Cav.stroke();

   //Center Circle 
    Cav.beginPath();
    Cav.fillStyle="black"
    Cav.arc(x,y,6,180,0,2*Math.PI);
    Cav.fill();

  //Text
    Cav.fillStyle="black";
    Cav.font="18px sans-serif";
    Cav.textAlign="center";
    Cav.fillText("Jim's Clock",300,370);    
  
    Cav.font="17px Brush Script mt";
    Cav.fillStyle="black";
    Cav.strokeStyle="black";
    Cav.fillText("Created by Tonny",540,590);


   let WeekDay=now.getDay()+1;
   let Day=now.getDate();
   let Year=now.getFullYear();
   let Month=now.getMonth()+1;
   
   switch(Month){
      
    case 1: Month="January"; break;
    case 2: Month="February"; break;
    case 3: Month="March"; break;
    case 4: Month="April"; break;
    case 5: Month="May"; break;
    case 6: Month="June"; break;
    case 7: Month="July"; break;
    case 8: Month="August"; break;
    case 9: Month="September"; break;
    case 10: Month="October"; break;
    case 11: Month="November"; break;
    case 12: Month="December"; 
   }

   switch(WeekDay){
    
     case 1: WeekDay="Sunday"; break;
     case 2: WeekDay="Monday"; break;
     case 3: WeekDay="Tuesday"; break;
     case 4: WeekDay="Wednesday"; break;
     case 5: WeekDay="Thursday"; break;
     case 6: WeekDay="Friday"; break;
     case 7: WeekDay="Saturday";
   }
     
    
    Cav.strokeStyle="9c7025";
    Cav.lineWidth=1;
    Cav.font="16px ink free";
    Cav.strokeText(WeekDay,400,405);

    Cav.font="12px ink free";
    Cav.strokeText(Day,200,385);

    Cav.font="16px ink free";
    Cav.strokeText(Month,200,405);

    Cav.font="12px ink free";
    Cav.strokeText(Year,200,425);

     //Caption Text
    
     Cav.strokeStyle="black";
     Cav.fillStyle="black";
     Cav.textAlign="Center";
     Cav.font="60px ink free";
     Cav.fillText("Analog Clock",x,50);
     Cav.strokeText("Analog Clock",x,50);


    DrawNumber(); 
}

function DrawNumber(){

  
  //Draw numbers between 1 to 12 (both inclusive)  
 for(let i=1;i<=12;i++){

  let  d=270;
          
   str = i.toString();
   dd= Math.PI/180*(d+i*30);
   let Posx= Math.cos(dd)*165+x;
   let Posy= Math.sin(dd)*165+y+8;
    
   Cav.font="bold 25px Century Gothic";
   Cav.textAlign="center";
   Cav.fillStyle="black";
   Cav.fillText(str,Posx,Posy);
  }


  //Draw numbers between 5 to 60 (both inclusive)  
  for(let i=5;i<=60;i+=5){

    let  d=270;

    str = i.toString();
    dd= Math.PI/180*(d+i*150);
    let Posx= Math.cos(dd)*195+x;
    let Posy= Math.sin(dd)*195+y+4;
        
    Cav.textAlign="Center";
    Cav.font="bold 14px Arial";
    Cav.fillStyle="Black";
    Cav.fillText(str,Posx,Posy);   
    
  }

    
}

function DrawLines(deg,len,color,w){
 
 var Count=5;

 Ran=(Math.PI/180*deg);
 x1=x+Math.cos(Ran)*len;
 y1=y+Math.sin(Ran)*len;

 Cav.beginPath();
 Cav.strokeStyle=color;
 Cav.lineWidth=w;
 Cav.moveTo(x,y);
 Cav.lineTo(x1,y1);
 Cav.stroke();



 //Draw dots
 for(let i=1;i<=60;i++){

  let  d=270;
  
  dd= Math.PI/180*(d+i*6);
  let Posx= Math.cos(dd)*195+x;
  let Posy= Math.sin(dd)*195+y;
 
   if(i==Count){
    Count+=5;
    continue;
   }

  Cav.beginPath();
  Cav.strokeStyle="black";
  Cav.lineWidth=2;
  Cav.rect(Posx,Posy,0.1,0.1);
  Cav.stroke(); 
   
}
 
}

setInterval(Clock,1000);

