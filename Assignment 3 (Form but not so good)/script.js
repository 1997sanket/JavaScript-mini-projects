
let fnm = document.getElementById('fnm');
let lnm = document.getElementById('lnm');
let invalidCheck = document.getElementById('invalidCheck');
let btn = document.getElementById('btn');
let bd = document.getElementById('bd');
let msg = document.getElementById('msg');

window.addEventListener('load', () => {

    // if ((invalidCheck.checked === false) && (fnm.value === '') && (bd.value === '')) {
    btn.disabled = true;
    //}
    document.getElementById('validityDiv').style.display = 'none';
    document.getElementById('validitySmall').innerHTML = '';

    //Showing fnm info
    document.getElementById('fnmDiv').style.display = 'block';
    document.getElementById('fnmSmallInfo').innerHTML = 'Enter name';

    //Showing bd info
    document.getElementById('bdDiv').style.display = 'block';
    document.getElementById('bdSmallInfo').innerHTML = 'Enter Birth date';

    //Showing agreement info





});




fnm.addEventListener('blur', () => {
    if (fnm.value === '') {
        document.getElementById('fnmDiv').style.display = 'block';
        document.getElementById('fnmSmall').innerHTML = 'First name cannot be empty';
        document.getElementById('fnmSmallInfo').innerHTML = '';
        btn.disabled = true;
    } else {
        document.getElementById('fnmDiv').style.display = 'none';
        document.getElementById('fnmSmall').innerHTML = '';
        //btn.disabled = false;
    }
});

bd.addEventListener('blur', () => {
    if (bd.value === '') {
        document.getElementById('bdDiv').style.display = 'block';
        document.getElementById('bdSmall').innerHTML = 'Birth date cannot be empty';
        document.getElementById('bdSmallInfo').innerHTML = '';
        btn.disabled = true;

    } else {
        document.getElementById('bdDiv').style.display = 'none';
        document.getElementById('bdSmall').innerHTML = '';

        //btn.disabled = false;
    }
});

bd.addEventListener('mouseleave', () => {
    document.getElementById('validityDiv').style.display = 'block';
    document.getElementById('validitySmall').innerHTML = 'You must agree before submitting.';
});

invalidCheck.addEventListener('click', () => {

    if (invalidCheck.checked) {
        document.getElementById('validityDiv').style.display = 'none';
        document.getElementById('validitySmall').innerHTML = 'You must agree before submitting.';
    } else {
        document.getElementById('validityDiv').style.display = 'block';
        document.getElementById('validitySmall').innerHTML = 'You must agree before submitting.';
    }

    if ((invalidCheck.checked) && (fnm.value != '') && (bd.value != '')) {
        console.log('True');
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});




// btn.addEventListener('mouseover', () => {

//     if (fnm.value === '') {
//         document.getElementById('fnmDiv').style.display = 'block';
//         document.getElementById('fnmSmall').innerHTML = 'First name cannot be empty';
//         btn.disabled = true;
//     } else {
//         document.getElementById('fnmDiv').style.display = 'none';
//         document.getElementById('fnmSmall').innerHTML = '';
//         //btn.disabled = false;
//     }


//     if (bd.value === '') {
//         document.getElementById('bdDiv').style.display = 'block';
//         document.getElementById('bdSmall').innerHTML = 'Birth date cannot be empty';
//         btn.disabled = true;

//     } else {
//         document.getElementById('bdDiv').style.display = 'none';
//         document.getElementById('bdSmall').innerHTML = '';

//         //btn.disabled = false;
//     }























// btn.addEventListener('submit', () => {

//     messages = [];

//     if (fnm.value === '') {
//         document.getElementById('fnmDiv').style.display = 'block';
//         document.getElementById('fnmSmall').innerHTML = 'First name cannot be empty';

//     }

//     if (lnm.value === '') {
//         document.getElementById('lnmDiv').style.display = 'block';
//         document.getElementById('lnmSmall').innerHTML = 'Last name cannot be empty';
//     }

//     if (bd.value === '') {
//         document.getElementById('bdDiv').style.display = 'block';
//         document.getElementById('bdSmall').innerHTML = 'Birth date cannot be empty';
//     }





//     if (messages.length > 0) {
//         messages.join(', ');
//         msg.innerHTML = messages;
//     }
// });

// invalidCheck.addEventListener('click', () => {

//     btn.disabled = false;
// })

