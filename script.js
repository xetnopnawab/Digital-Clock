
var h = document.querySelector('#hours');
var m = document.querySelector('#mins');
var s = document.querySelector('#sec');
var change = document.getElementById('#amPm');

function myFunction(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
     if(hours == 0){
         hours = 12;
     }
     if(hours > 12){
        hours -= 12;
        change.innerText = 'PM';
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

   
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
     
}
myFunction();
setInterval(myFunction, 1000);

