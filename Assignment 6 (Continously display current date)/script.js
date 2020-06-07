let clock = document.getElementById('clock');



setInterval(() => {
    console.log('ss');
    let d = new Date();
    clock.innerHTML = d.toString();
}, 1000);