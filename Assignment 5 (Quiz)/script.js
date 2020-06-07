let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let h2 = document.getElementById('h2');
let btn = document.getElementById('btn');



//Literal object
let marks = {
    total: 25,
    yourMarks: 0
}


//Question 1
if (q1.value === 'delhi') {
    marks.yourMarks = marks.yourMarks + 5;
}

q1.addEventListener('change', (event) => {
    q1.value = event.target.value;
    if (q1.value === 'delhi') {
        marks.yourMarks = marks.yourMarks + 5;
    }

});







//Question 2
if (q2.value === 'mumbai') {
    marks.yourMarks = marks.yourMarks + 5;
}

q2.addEventListener('change', (event) => {
    q2.value = event.target.value;
    if (q2.value === 'mumbai') {
        marks.yourMarks = marks.yourMarks + 5;
    }

});





//Question 3
if (q3.value === 'sitaraman') {
    marks.yourMarks = marks.yourMarks + 5;
}

q3.addEventListener('change', (event) => {
    q3.value = event.target.value;
    if (q3.value === 'sitaraman') {
        marks.yourMarks = marks.yourMarks + 5;
    }

});


//Question 4
if (q4.value === 'india') {
    marks.yourMarks = marks.yourMarks + 5;
}

q4.addEventListener('change', (event) => {
    q4.value = event.target.value;
    if (q4.value === 'india ') {
        marks.yourMarks = marks.yourMarks + 5;
    }

});


//Question 5
if (q5.value === 'yes') {
    marks.yourMarks = marks.yourMarks + 5;
}










// if (q2.value === 'mumbai') {
//     marks.total = marks.total + 5;
// }

// if (q3.value === 'sitaraman') {
//     marks.total = marks.total + 5;
// }

// if (q4.value === 'india') {
//     marks.total = marks.total + 5;
// }

// if (q5.value === 'yes') {
//     marks.total = marks.total + 5;
// }

// h2.innerHTML = `Your marks are ${marks.yourMarks} out of 25 `;



btn.addEventListener('click', () => {
    console.log("btn");
    document.getElementById('container').innerHTML = ` <h1> Your marks are ${marks.yourMarks} out of 25 </h1>`;

})

