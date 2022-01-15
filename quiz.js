const correct_anss = ["C", "D", "C", "B", "B"];
const form = document.querySelector("form");
let result = document.querySelector(".result");
let span = document.querySelector("span");
let submit_btn = document.querySelector(".submit-btn");
let retake = document.querySelector(".retake");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit_btn.setAttribute("disabled", true);
    let answers = [form.q1, form.q2, form.q3, form.q4, form.q5];
    let score = 0;
    correct_anss.forEach((correct_ans, index) => {
        let value = answers[index].value;
        if(correct_ans === value) {
            score += 20;
            Array.from(answers[index]).forEach(radio => {
                if (radio.value === correct_ans) {
                     radio.classList.remove("border-light");
                     radio.style.backgroundColor = "limegreen";
                     radio.style.borderColor = "white";
                }
                else {
                    radio.setAttribute("disabled", true);
                }
            });
        }
        else {
            Array.from(answers[index]).forEach(radio => {
                if (radio.value === value) {
                     radio.classList.remove("border-light");
                     radio.style.backgroundColor = "crimson";
                     radio.style.borderColor = "white";
                }
                else {
                    radio.setAttribute("disabled", true);
                }
            });
        }
    });

    //show result
    scrollTo(0,0); // scroll toward the X, Y position of the page
    result.classList.remove("d-none");

    let output = 0;

    const timer = setInterval(() => {
        span.textContent = `${output}%`;
        output++;
        if (output > score) {
            setTimeout(() => retake.classList.remove("d-none"), 1000);
            clearInterval(timer);
        }
    }, 15);
});

retake.addEventListener("click", () => {
    location.reload();
});

// setTimeout will fire the function after the specified seconds as second argument which is ms.
// setTimeout(() => {
//     console.log("hello");
// }, 1000);

// let i = 0
// // setInterval will fire the function every time after the specified seconds.
// const timer = setInterval(() => {
//     console.log(i + "hello");
//     i++;
//     if (i > 5) {
//         clearInterval(timer); // clear the interval by assigning into the variable
//     }
// }, 2000);