const question = document.getElementById('question');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener('click', operate);

function operate() {
    let questionContent = question.value;
    let pattern = /^[(]?[-]?([0-9]+)[)]??([(]?([-+/*]([0-9]))?([.,][0-9]+)?[)]?)*$/;
    // console.log(questionContent.match(pattern));
    if (question.value.match(pattern)) {
        console.log('Inside if')
        result.value = eval(questionContent);
    } else {
        alert('Operation input should only contain numbers and mathematical characters');
    }
}