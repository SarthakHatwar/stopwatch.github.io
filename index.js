 // required variables
 let [hr, min, sec] = [0, 0, 0];
 let displayTime = document.getElementById("displayTime");
 let timer = null;

 // function to increase time
 function stopwatch() {
     sec++;
     if (sec == 60) {
         sec = 0;
         min++;
         if (min == 60) {
             min = 0;
             hr++;
         }
     }

     let h = (hr < 10) ? "0" + hr : hr;
     let m = (min < 10) ? "0" + min : min;
     let s = (sec < 10) ? "0" + sec : sec;

     displayTime.innerHTML = h + ":" + m + ":" + s;
 }

 // Start
 function watchStart() {
     if (timer !== null) {
         clearInterval(timer);
     }
     timer = setInterval(stopwatch, 1000);
 }

 function Stop() {
     clearInterval(timer);
 }

 function Reset() {
     clearInterval(timer);
     [sec, min, sec] = [0, 0, 0];
     displayTime.innerHTML = "00:00:00";
 }