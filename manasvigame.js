
const quizData = [{
    question: "How many Bytes in a kilobyte",
    a: "10",
    b: "1000",
    c: "1024",
    d: "1",
    correct: "c",
},
{
    question: "Full form of RAM Is",
    a: "Randomly Accessed Memory",
    b: "Random Access Memory",
    c: "Read Account Memory",
    d: "None of the above",
    correct: "b",
},
{
    question: "Which of these is not an input device",
    a: "Monitor",
    b: "Joystick",
    c: "Mouse",
    d: "Keyboard",
    correct: "a",
}


];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Score ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
