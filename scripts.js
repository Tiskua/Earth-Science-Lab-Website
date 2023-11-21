const dropdowns = document.querySelectorAll('.dropdown');

document.addEventListener('click', e => {
    if (e.target.classList == null) return
    if (!e.target.classList.contains("select") && !e.target.classList.contains('selected')) {
        hideAllDropdowns()
    }
})


dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        if (!menu.classList.contains('menu-open')) {
            hideAllDropdowns()
        }
        select.classList.toggle('selected-click');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        if (select.classList.contains("correct") || select.classList.contains("incorrect")) {
            resetAnswers()
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

function hideAllDropdowns() {
    dropdowns.forEach(dp => {
        const select = dp.querySelector('.select');
        const caret = dp.querySelector('.caret');
        const menu = dp.querySelector('.menu');
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
    })
}

let passedLab1 = false
let passedLab2 = false
let passedLab3 = false
let passedLab4 = false
let passedLab5 = false


const lab_1_answers = [
    "D",
    "C",
    "B",
    "A",
]
const lab_2_answers = [
    "E",
    "C",
    "B",
    "D (Magma)",
    "F (Erosion)",
    "A",
]
const lab_3_answers = [
    "C",
    "B",
    "A",
    "D (Magma)",
    "E (Fault)",
]

const lab_4_answers = [
    "D",
    "E",
    "F",
    "G",
    "B",
    "C (Magma)",
    "A (Erosion)",
    "H",
    "I",
    "J",
]


const lab_5_answers = [
    "F",
    "E",
    "D",
    "G",
    "H (Fault)",
    "I (Erosion)",
    "C",
    "B",
    "A",
    "J (Fault)",
]

function checkAnswers(lab) {
    let answers = []
    let passed = true
    const nextLabButton = document.getElementById("next-lab-btn");
    dropdowns.forEach(function (dropdown, i) {
        const select = dropdown.querySelector('.select')
        const selected = dropdown.querySelector('.selected')
        var answers = lab_1_answers

        if (lab == 2) answers = lab_2_answers;
        if (lab == 3) answers = lab_3_answers;
        if (lab == 4) answers = lab_4_answers;
        if (lab == 5) answers = lab_5_answers;

        if (answers[i] == selected.innerText) {
            console.log("CORRECT");
            select.classList.add("correct")
        } else {
            console.log("INCORRECT");
            select.classList.add("incorrect")
            passed = false

        }
    })

    if (passed) {
        if (lab == 1) passedLab1 = true;
        if (lab == 2) passedLab2 = true;
        if (lab == 3) passedLab3 = true;
        if (lab == 4) passedLab4 = true;
        if (lab == 5) { 
            alert("Congratulations! You have successfully completed all 5 of the labs with a perfect score!")
            passedLab5 = true
         };
        console.log("passed !")
        nextLabButton.classList.remove("disabled");
    } else {
        nextLabButton.classList.add("disabled");

    }
}


function resetAnswers() {
    dropdowns.forEach(function (dropdown, i) {
        const select = dropdown.querySelector('.select')
        const selected = dropdown.querySelector('.selected')
        const options = dropdown.querySelectorAll('.menu li');
        selected.innerText = "Select an Answer"
        select.classList.remove("correct")
        select.classList.remove("incorrect")

        options.forEach(option => {
            option.classList.remove('active');
        });
    })
}
