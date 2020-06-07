let name = document.getElementById('name');
let btn = document.getElementById('btn');
let form = document.getElementById('frm');

btn.addEventListener('click', () => {
    form.style.display = "none";

    let clientName = name.value
    let d = new Date();
    let greet = '';
    if (d.getHours() <= 12) {
        greet = 'Good Morning';
    } else if (d.getHours() > 12 && d.getHours() <= 16) {
        greet = 'Good Afternoon';
    } else if (d.getHours() >= 16 && d.getHours() <= 7) {
        greet = 'Good Evening';
    } else {
        greet = 'Good night';
    }




    let msg = document.createTextNode(`Welcome ${clientName} ,  ${greet}`);
    document.getElementById('message').appendChild(msg);

})