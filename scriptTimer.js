var target_date = new Date().getTime() + (100*375*48); // 
var days, hours, minutes, seconds; //
 
var countdown = document.getElementById("tiles"); 
 
getCountdown();
 
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = pad( parseInt(seconds_left / 172800) );
    seconds_left = seconds_left % 172800;
          
    hours = pad( parseInt(seconds_left / 172800) );
    seconds_left = seconds_left % 1800;
           
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
 
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}
 
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}