  format=false;
  setInterval(Clock,100);

Clock();
function Clock(){
	Now = new Date();
	let day = Now.getDay()+1;
	let dayInWeek = document.querySelectorAll('li');
	TimePanel= document.querySelector('h1');
	buttons = document.querySelectorAll('h5');

	
	switch(day){
     case 1: dayInWeek[0].style="color:#00ff97";break;
     case 2: dayInWeek[1].style="color:#00ff97";break;
     case 3: dayInWeek[2].style="color:#00ff97";break;
     case 4: dayInWeek[3].style="color:#00ff97";break;
     case 5: dayInWeek[4].style="color:#00ff97";break;
     case 6: dayInWeek[5].style="color:#00ff97";break;
     case 7: dayInWeek[6].style="color:#00ff97";break;
	}
	
	hr = Now.getHours();
	mn = Now.getMinutes();
	sc = Now.getSeconds();
	Output="";
	
	hr= hr<10? hr="0"+hr:hr=hr;
    mn= mn<10? mn="0"+mn:mn=mn;
	sc= sc<10? sc="0"+sc:sc=sc;
	period = hr>12? period="PM":period="AM";
	
	for(let i in buttons){
		buttons[0].addEventListener('click', function(e){
			format=true;
			buttons[0].style.color="#00ff97";
			buttons[1].style.color="#8A8A8A";
		});
		buttons[1].addEventListener('click', function(e){
			format=false;
			buttons[1].style.color="#00ff97";
			buttons[0].style.color="#8A8A8A";
		});
	  }

   if((format)){
	   
   //12 Hour Format
    hr = hr > 12 ? hr % 12 : hr;
	Output=hr+":"+mn+":"+sc+" "+period;
	TimePanel.innerHTML=Output;
   }
   else{
	//Time In 24 Hour Format also called the military time
	Output=hr+":"+mn+":"+sc;
   TimePanel.innerHTML=Output;
   }
}
	