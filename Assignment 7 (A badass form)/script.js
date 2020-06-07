
// document.addEventListener('load', () => {
//     document.getElementById('btn').disabled = true;
// });


let validityObject = {
    fnm: false,
    age: false,
    email: false,
    mobile: false,
    agreement: false

}









//First name

fnm.addEventListener('focus', () => {
    document.getElementById('fnmSmallInfo').style.display = 'none';
});


fnm.addEventListener('blur', (event) => {
    console.log(fnm.value.length);
    if (fnm.value.length < 3) {
        console.log('if');
        document.getElementById('fnmSmall').innerHTML = `Name cannot be empty and should atleast have 3
        characters`;
        validityObject.fnm = false;
    } else {
        document.getElementById('fnmSmall').innerHTML = '';
        validityObject.fnm = true;
    }

});








//Age 

age.addEventListener('focus', () => {
    document.getElementById('ageSmallInfo').style.display = 'none';
});

age.addEventListener('blur', (event) => {
    console.log('out age');
    // if (age.value < 16) {
    //     console.log('Age if');
    //     document.getElementById('ageSmall').innerHTML = "Age is required and should be greater than 16";
    // } else {
    //     document.getElementById('ageSmall').innerHTML = '';
    // }

    if (age.value === '') {
        document.getElementById('ageSmall').innerHTML = "Age is required";
        validityObject.age = false;
    } else if (age.value < 16) {
        console.log('Age if');
        document.getElementById('ageSmall').innerHTML = "Age should be greater than 16";
        validityObject.age = false;
    } else {
        document.getElementById('ageSmall').innerHTML = '';
        validityObject.age = true;
    }


});


//Email 

email.addEventListener('focus', () => {
    document.getElementById('emailSmallInfo').style.display = 'none';
});

email.addEventListener('blur', (event) => {
    console.log('out email');
    let validity = checkEmail(email.value);
    if (email.value === '') {
        document.getElementById('emailSmall').innerHTML = 'Email cannot be empty';
        validityObject.email = false;
    } else if (!validity) {
        document.getElementById('emailSmall').innerHTML = 'Email should be of the form "rob@test.com"';
        validityObject.email = false;
    } else {
        document.getElementById('emailSmall').innerHTML = '';
        validityObject.email = true;
    }
});


function checkEmail(value) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(mailformat)) {
        return true;
    } else return false;
}




//Mobile 
mobile.addEventListener('focus', () => {
    document.getElementById('mobileSmallInfo').style.display = 'none';
});

mobile.addEventListener('blur', (event) => {
    console.log('out mobile');
    let validity = checkMobile(mobile.value);

    if (mobile.value === '') {
        document.getElementById('mobileSmall').innerHTML = 'Mobile field cannot be empty';
        validityObject.mobile = false;
    } else if (!validity) {
        console.log('in validty');
        document.getElementById('mobileSmall').innerHTML = 'Mobile field should only contain numbers';
        validityObject.mobile = false;
    } else if (mobile.value.length < 10) {
        document.getElementById('mobileSmall').innerHTML = 'Mobile field should atleast have 10 digits';
        validityObject.mobile = false;
    } else {
        document.getElementById('mobileSmall').innerHTML = '';
        validityObject.mobile = true;
    }


});

function checkMobile(value) {
    let mobileFormat = /^[0-9]+$/;
    if (value.match(mobileFormat)) return true;
    else return false;
}


//Submit button

agreement.addEventListener('click', () => {
    if ((agreement.checked) && (validityObject.fnm) && (validityObject.age) && (validityObject.email) && (validityObject.mobile)) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

    //Checking fnm again after checking the agreement

    fnm.addEventListener('change', (event) => {

        console.log('fnm with change');
        if (fnm.value.length < 3) {
            console.log('if');
            document.getElementById('fnmSmall').innerHTML = `Name cannot be empty and should atleast have 3
            characters`;
            validityObject.fnm = false;
        } else {
            document.getElementById('fnmSmall').innerHTML = '';
            validityObject.fnm = true;
        }

        if ((agreement.checked) && (validityObject.fnm) && (validityObject.age) && (validityObject.email) && (validityObject.mobile)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });


    //Checking age again after checking the agreement

    age.addEventListener('change', (event) => {

        if (age.value === '') {
            document.getElementById('ageSmall').innerHTML = "Age is required";
            validityObject.age = false;
        } else if (age.value < 16) {
            console.log('Age if');
            document.getElementById('ageSmall').innerHTML = "Age should be greater than 16";
            validityObject.age = false;
        } else {
            document.getElementById('ageSmall').innerHTML = '';
            validityObject.age = true;
        }



        if ((agreement.checked) && (validityObject.fnm) && (validityObject.age) && (validityObject.email) && (validityObject.mobile)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });



    //Checking Email

    email.addEventListener('change', (event) => {
        console.log('out email');
        let validity = checkEmail(email.value);
        if (email.value === '') {
            document.getElementById('emailSmall').innerHTML = 'Email cannot be empty';
            validityObject.email = false;
        } else if (!validity) {
            document.getElementById('emailSmall').innerHTML = 'Email should be of the form "rob@test.com"';
            validityObject.email = false;
        } else {
            document.getElementById('emailSmall').innerHTML = '';
            validityObject.email = true;
        }


        //Checking again
        if ((agreement.checked) && (validityObject.fnm) && (validityObject.age) && (validityObject.email) && (validityObject.mobile)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });



    //Checking mobile

    mobile.addEventListener('change', (event) => {
        console.log('out mobile');
        let validity = checkMobile(mobile.value);

        if (mobile.value === '') {
            document.getElementById('mobileSmall').innerHTML = 'Mobile field cannot be empty';
            validityObject.mobile = false;
        } else if (!validity) {
            console.log('in validty');
            document.getElementById('mobileSmall').innerHTML = 'Mobile field should only contain numbers';
            validityObject.mobile = false;
        } else if (mobile.value.length < 10) {
            document.getElementById('mobileSmall').innerHTML = 'Mobile field should atleast have 10 digits';
            validityObject.mobile = false;
        } else {
            document.getElementById('mobileSmall').innerHTML = '';
            validityObject.mobile = true;
        }



        //Checking again after the change
        if ((agreement.checked) && (validityObject.fnm) && (validityObject.age) && (validityObject.email) && (validityObject.mobile)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }



    });


});







