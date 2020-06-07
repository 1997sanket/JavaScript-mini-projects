
const images = ['images/jimi.jpg', 'images/eric.jpg', 'images/srv.jpg', 'images/john.jpg'];

const image = document.getElementById('image');
const slideBtn = document.getElementById('slideBtn');
const stopBtn = document.getElementById('stopBtn');
var x;


//Closure function to keep our 'i' variable safe

var changeImage = (function () {
    //To display first image when the page is loaded
    var i = 0;
    image.src = images[i];
    console.log(`i = ${i}`);

    //changeImage function
    return function (event) {

        // console.log(event.target);
        // //If nextBtn is clicked 
        // if (event.target === nextBtn) {

        ++i;

        if (i === images.length) {
            i = 0;
        }
        image.src = images[i];
        console.log(`i = ${i}`);
    }



})();

slideBtn.addEventListener('click', startSlide);
stopBtn.addEventListener('click', stopSlide);

function startSlide() {
    x = setInterval(changeImage, 1200);
}

function stopSlide() {
    clearInterval(x);
}



//  SetInterval and clearInterval in the same function was not working

// function controlSlide(event) {
//     console.log(event.target);
//     let x;
//     //let y = 1
//     //If slideBtn clicked
//     if (event.target === slideBtn) {
//         x = setInterval(changeImage, 2000);
//         // console.log(`y in slideBtn = ${y}`);
//     } else if (event.target === stopBtn) {
//         console.log('Inside stop btn');
//         // console.log(`y in stopBtn = ${y}`);
//         clearInterval(x);

//     }

// }
//prevBtn.addEventListener('click', changeImage);






