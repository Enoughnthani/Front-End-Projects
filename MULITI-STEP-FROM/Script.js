var Step = document.querySelectorAll('#line');
var Next1 = document.getElementById('Next1');
var Next2 = document.getElementById('Next2');
var Next3 = document.getElementById('Next3');
var Progress = document.getElementById('Step');
var Form = document.querySelectorAll('form');

var Back1 = document.getElementById('Back1');
var Back2 = document.getElementById('Back2');
var Back3 = document.getElementById('Back3');


Next1.addEventListener('click',function(){

    if(!(Form[0].checkValidity())){
        return;
    }


    Step[0].innerHTML="&#10004;";
    Step[1].style="background:rgb(118, 255, 118)!important;";
    Form[0].style.cssText="top:100%;";
    Form[1].style="top:40%;";
    Progress.style.width="35%";
});

Next2.addEventListener('click',function(){

    if(!(Form[1].checkValidity())){
        return;
    }

    Step[1].innerHTML="&#10004;";
    Step[2].style="background:rgb(118, 255, 118)!important;";
    Form[1].style="top:100%; ";
    Form[2].style.cssText="top:40%;";
    Progress.style.width="70%";
    
});

Next3.addEventListener('click',function(){

    if(!(Form[2].checkValidity())){
        return;
    }

    Step[2].innerHTML="&#10004;";
    Step[3].style="background:rgb(118, 255, 118)!important;";
    Form[2].style="top:100%";
    Form[3].style="top:40%;";
    Progress.style.width="100%";
});


Back1.addEventListener('click',function(){

    Step[0].innerHTML="1";
    Step[1].style="background:white";
    Form[0].style="top:40%";
    Form[1].style="top:100%;";
    Progress.style.width="0%";
});

Back2.addEventListener('click',function(){

    Step[1].innerHTML="2";
    Step[2].style="background:white";
    Form[1].style="top:40%";
    Form[2].style="top:100%;";
    Progress.style.width="35%";
});

Back3.addEventListener('click',function(){

    Step[2].innerHTML="3";
    Step[3].style="background:white";
    Form[2].style="top:40%";
    Form[3].style="top:100%;";
    Progress.style.width="70%";
});

function Notify() {

    if(!(Form[3].checkValidity())){
        return;
    }
   
   var Success = document.getElementsByClassName('Success');
   Success[0].style.display="block";

 
    Form[0].action="https://formspree.io/f/mvollvvw";
    Form[0].method="POST";
    Form[0].submit();

    Form[1].action="https://formspree.io/f/mvollvvw";
    Form[1].method="POST";
    Form[1].submit();

    Form[2].action="https://formspree.io/f/mvollvvw";
    Form[2].method="POST";
    Form[2].submit();  

    Form[3].action="https://formspree.io/f/mvollvvw";
    Form[3].method="POST";
    Form[3].submit(); 
}