
const images = ['images/kurt.jpg', 'images/john.jpg', 'images/billie.jpg'];

const image = document.getElementById('image');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// var i = 0;
// image.src = images[i];
// console.log(`i = ${i}`);


//Closure function to keep our 'i' variable safe

var changeImage = (function () {
    //To display first image when the page is loaded
    var i = 0;
    image.src = images[i];
    console.log(`i = ${i}`);

    //changeImage function
    return function (event) {

        console.log(event.target);
        //If nextBtn is clicked 
        if (event.target === nextBtn) {

            ++i;

            if (i === images.length) {
                i = 0;
            }
            image.src = images[i];
            console.log(`i = ${i}`);
        }

        //If prevBtn is clicked
        else if (event.target === prevBtn) {

            --i;

            if (i < 0) {
                i = 2;
            }

            image.src = images[i];
            console.log(`i = ${i}`);
        }
    }

})();

nextBtn.addEventListener('click', changeImage);
prevBtn.addEventListener('click', changeImage);

// function nextImage() {


//     ++i;

//     if (i === images.length) {
//         i = 0;
//     }
//     image.src = images[i];
//     console.log(`i = ${i}`);



// }


// prevBtn.addEventListener('click', prevImage);

// function prevImage() {
//     --i;

//     if (i < 0) {
//         i = 2;
//     }

//     image.src = images[i];
//     console.log(`i = ${i}`);
// }



// function changeImage(event) {
//     console.log(event.target);
//     //If nextBtn is clicked 
//     if (event.target === nextBtn) {

//         ++i;

//         if (i === images.length) {
//             i = 0;
//         }
//         image.src = images[i];
//         console.log(`i = ${i}`);
//     }

//     //If prevBtn is clicked
//     else if (event.target === prevBtn) {

//         --i;

//         if (i < 0) {
//             i = 2;
//         }

//         image.src = images[i];
//         console.log(`i = ${i}`);
//     }
// }




