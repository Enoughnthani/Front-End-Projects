var Next1 = document.getElementById('Next1');
var Next2 = document.getElementById('Next2');
var Back1 = document.getElementById('Back1');
var Back2 = document.getElementById('Back2');
var Form = document.querySelectorAll('form');
var Progress = document.querySelector('#Progress');


function chooseACouser() {

  const ictCourses = [
    "Computer Science",
    "Information Technology",
    "Informatics",
    "Computer System Engineering",
    "Multimedia"
  ];

  const humanitiesCourses = [
    "Applied Languages",
    "Integrated Communication",
    "Journalism",
    "Law",
    "Public Management"
  ];

  const econFinanceCourses = [
    "Accounting",
    "Auditing",
    "Economics",
    "Finance and Investment",
    "Public Sector Finance"
  ];

  option = document.getElementsByName('DEPARTMENT');
  courses = document.getElementsByName("course");


  for (x = 0; x < ictCourses.length; x++) {
    courses[x].innerHTML = "";
  }

  if (option[0].value == "INFORMATION AND COMMUNICATION TECHNOLOGY") {

    for (x = 0; x < ictCourses.length; x++) {
      courses[x].innerHTML = ictCourses[x].toUpperCase();
    }

  } else if (option[0].value == "HUMANITIES") {

    for (x = 0; x < ictCourses.length; x++) {
      courses[x].innerHTML = humanitiesCourses[x].toUpperCase();
    }

  } else if (option[0].value == "ECONOMICS AND FINANCE") {

    for (x = 0; x < ictCourses.length; x++) {
      courses[x].innerHTML = econFinanceCourses[x].toUpperCase();
    }

  }
}


Next1.addEventListener('click', function () {
  select = document.getElementsByTagName('select');
  let phoneNo = "" + document.getElementById("no").value;
  let id = "" + document.getElementById("id").value;

  if (!(Form[0].checkValidity()) || (select[0].selectedIndex == 0) || (phoneNo.length < 10) || (id.length < 13)) {
    return;
  }

  Form[0].style = " left:550px;";
  Form[1].style = "left:0px";
  Progress.style = "width:66%;";

});

Next2.addEventListener('click', function () {

  if (!(Form[1].checkValidity())) {
    return;
  }

  output = document.getElementsByName('output');
  input = document.getElementsByTagName('input');
  select = document.getElementsByTagName('select');
  values = new Array(10);

  for (let x = 0; x < select.length; x++) {
    if (select[x].selectedIndex == 0) {
      return;
    }
  }

  for (let x = 0; x < input.length; x++) {
    if ((input[x].type === "text" || input[x].type === "email") && (input[x].name != "output")) {
      output[x].value += input[x].value;
    }
  }

  for (let x = 0; x < select.length; x++) {
    output[x + 6].value += select[x].value;
  }




  Form[1].style.cssText = "left:550px"
  Form[2].style.cssText = "left:0px;"
  Form[2].parentNode.style = "height:900px;"
  Progress.style = "width:100%;"
});


Back1.addEventListener('click', function () {
  Form[0].style.cssText = "left:0";
  Form[1].style.cssText = "left:550";
  Progress.style = "width:33%;";
});

Back2.addEventListener('click', function () {
  Form[1].style.cssText = "left:0px;";
  Form[2].style.cssText = "left:660px;";
  Form[2].parentNode.style = "height:650px;"
  Progress.style = "width:66%;";
});


function Notify() {
  alert("Thank you for registering! Your application is under review. We'll notify you once approved. Get ready to learn with us!");
}
