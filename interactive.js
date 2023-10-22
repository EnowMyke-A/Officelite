let countDownDate = new Date("Dec 4, 2023 00:00:00").getTime();
const Values = document.getElementsByClassName("value");
var i;

let x = setInterval(function() {

  for(i=0;i<Values.length;i++){
    Values[i].classList.remove('change_value');
  }
  
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(seconds==0)Values[2].classList.add('change_value');
  if(minutes==0 && seconds==0)Values[1].classList.add('change_value');
  if(hours==0 && minutes==0 && seconds==0)Values[0].classList.add('change_value');

  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("min").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("sec").innerHTML = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

onload = function(){x};