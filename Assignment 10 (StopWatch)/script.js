
/* My Approach :

  I need dynamic variables for minutes, seconds and milliseconds. But it doesnt automatically become dynamic
  we need a set() function to be called to set it everytime.
  So I am using setInterval() functions here to keep repeating the job every millisecond, every second and every minutes.
  I simply incremented the variables, but kept a limit on seconds and milliseconds i.e they cannot go beyond 60 and 100 
  respectively. I also changed the Start buttons design accordingly. And showed Reset button as required, as it was in my
  iPhone. Also, I used 'if' and 'else' to manipulate the start and stop button as it was technically the same button.
  I used a counter variable, when the counter's remainder was 0, start button will operate and when its' 1, stop button will
  operate.

  Overall I'm extremely happy with this project, this was my last mini project, I am so happy, atleast now I know a
  little bit of JS. Its actually fun and not that difficult. Only with Asynchronous we have to be a little careful, its
  not the same as normal function. 

  Remember the event loop, the callback function, the defer in script tag, jQuery library,
  using Bootstrap, etc.  

  JS is fucking awesome.

*/



const h1 = document.getElementById('h1');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let minutes = seconds = mSeconds = 0;
let startMinutesInterval;
let startSecondsInterval;
let startMsecondsInterval;


//Initial value 0, 0 ,0
h1.innerHTML = `${minutes} : ${seconds} : ${mSeconds}`;


//Counter 
/*
    Explaination : If counter is a even number like 0,2,4... that means user is pressing 'Start', if counter is an odd number
                   like 1,3,5...then user press 'Stop' button. Based on that I have made if and else statement. If start is
                   pressed the setInterval() methods start and color of the button is changed to stop.
                   If stop is pressed then stop() method is called and button is again changed to start button

*/
let counter = 0;





//Start minutes
function startMinutes() {
    //console.log('In minutes');
    ++minutes;
    set();
}



//Start seconds
function startSeconds() {
    // console.log(`In seconds, ${seconds}`);
    ++seconds;

    if (seconds === 61) {
        seconds = 1;
    }
    set();
}



//Start milli seconds 
function startMseconds() {
    // console.log('In mSeconds');
    ++mSeconds;

    if (mSeconds === 101) {
        mSeconds = 1;
    }
    set();
}



// Start button
startBtn.addEventListener('click', () => {


    if (counter % 2 === 0) {
        console.log(`Inside start`, `counter was ${counter}`, `But now its 1`);
        //Counter increment
        ++counter;

        //For milli seconds
        startMinutesInterval = setInterval(startMseconds, 1);

        //For Seconds
        startSecondsInterval = setInterval(startSeconds, 1000);

        //For minutes
        startMsecondsInterval = setInterval(startMinutes, 60000);

        //Change Start button to stop button
        startBtn.innerHTML = 'Stop';
        startBtn.classList.remove('btn-primary');
        startBtn.classList.add('btn-warning');

        //Hide reset after pressing startBtn
        resetBtn.style.display = 'none';



    } else if (counter % 2 === 1) {
        console.log(`Inside stop`, `counter was ${counter} but now its 2`);
        ++counter;
        stop();
        startBtn.innerHTML = 'Start';
        startBtn.classList.remove('btn-warning');
        startBtn.classList.add('btn-primary');

        //Show display after pressing stopBtn
        resetBtn.style.display = 'block';

    }


})

//Reset Button
resetBtn.addEventListener('click', () => {

    stop();
    minutes = 0;
    seconds = 0;
    mSeconds = 0;
    set();
    //--counter;
    startBtn.innerHTML = 'Start';
    startBtn.classList.remove('btn-warning');
    startBtn.classList.add('btn-primary');

    //Hide reset after pressing resetBtn
    resetBtn.style.display = 'none';

});





function stop() {
    console.log('Inside stop function');
    clearInterval(startMinutesInterval);
    clearInterval(startSecondsInterval);
    clearInterval(startMsecondsInterval);
}


function set() {

    h1.innerHTML = `${minutes} : ${seconds} : ${mSeconds}`;

}