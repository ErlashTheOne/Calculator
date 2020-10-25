window.onload = function() {
    let buttons = document.querySelectorAll(".Calculator__keyboard button");
    let display = document.querySelector(".Calculator__display .display");
    let deleteOne = document.querySelector(".Calculator__keyboard #delete");
    let clearAll = document.querySelector(".Calculator__keyboard #clearAll");
    let positiveNegative = document.querySelector(".Calculator__keyboard #positiveNegative");
    let plus = document.querySelector(".Calculator__keyboard #plus");
    let minus = document.querySelector(".Calculator__keyboard #minus");
    let multiplication = document.querySelector(".Calculator__keyboard #multiplication");
    let divide = document.querySelector(".Calculator__keyboard #division");
    let equal = document.querySelector(".Calculator__keyboard #equal");
    let domArray = [
        document.querySelector(".Calculator__keyboard #num0"), 
        document.querySelector(".Calculator__keyboard #num1"),
        document.querySelector(".Calculator__keyboard #num2"),
        document.querySelector(".Calculator__keyboard #num3"),
        document.querySelector(".Calculator__keyboard #num4"),
        document.querySelector(".Calculator__keyboard #num5"),
        document.querySelector(".Calculator__keyboard #num6"),
        document.querySelector(".Calculator__keyboard #num7"),
        document.querySelector(".Calculator__keyboard #num8"),
        document.querySelector(".Calculator__keyboard #num9"),
        document.querySelector(".Calculator__keyboard #point")
    ];

    toggleItem(buttons);
    numbersOnDidplay(domArray, display);
    deleteOneDisplay(deleteOne, display);
    deleteAll(clearAll, display);
    changeToNegativeOrPositive(positiveNegative, display);
    //add(plus, display, equal, buttons);
    // substract(minus, display, equal);
    // multiply(multiplication, display, equal);
    // division(divide, display, equal);
};

function toggleItem(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function() {
            this.classList.add('clicked');
            setTimeout(() => {  this.classList.remove('clicked'); }, 200);
        });
    }
}

function numbersOnDidplay(domArray, display) {
    for (let i = 0; i < domArray.length; i++) {
        domArray[i].addEventListener("click", function() {
            if(this == document.querySelector(".Calculator__keyboard #point")) {
                if(!display.textContent.includes('.')) {
                    display.innerHTML += this.value;
                }
            } else {
                display.innerHTML += this.value;
            }
        });
    }
}

function deleteOneDisplay(deleteOne, display) {
    deleteOne.addEventListener("click", function() {
        let oneDeleted = display.textContent.slice(0, -1);
        display.innerHTML = oneDeleted;
    });
}

function deleteAll(clearAll, display) {
    clearAll.addEventListener("click", function() {
        display.innerHTML = "";
    });
}

function changeToNegativeOrPositive(positiveNegative, display) {
    positiveNegative.addEventListener("click", function() {
        if(display.textContent.includes('-')){
            let noMinus = display.textContent.slice(1);
            display.innerHTML = noMinus;
        } else {
            display.innerHTML = "-" + display.innerHTML;
        }
    });
}

// function add(plus, display, equal, buttons){
//     plus.addEventListener("click", function() {
//         let firstNum = parseInt(display.textContent);
//         if(toggleItem(buttons)){
//             display.innerHTML = "";
//             toggleItem(buttons);
//             equal.addEventListener("click", function() {
//                 display.innerHTML = (firstNum + parseInt(display.textContent));
//             });
//         }
//     });
// }

// function substract(minus, display, equal, buttons){
//     minus.addEventListener("click", function() {
//         let firstNum = parseInt(display.textContent);
//         if(toggleItem(buttons)){
//             display.innerHTML = "";
//             toggleItem(buttons);
//             equal.addEventListener("click", function() {
//                 display.innerHTML = (firstNum - parseInt(display.textContent));
//             });
//         }
//     });
// }

// function multiply(multiplication, display, equal, buttons){
//     multiplication.addEventListener("click", function() {
//         let firstNum = parseInt(display.textContent);
//         if(toggleItem(buttons)){
//             display.innerHTML = "";
//             toggleItem(buttons);
//             equal.addEventListener("click", function() {
//                 display.innerHTML = (firstNum * parseInt(display.textContent));
//             });
//         }
//     });
// }

// function division(divide, display, equal, buttons){
//     divide.addEventListener("click", function() {
//         let firstNum = parseInt(display.textContent);
//         if(toggleItem(buttons)){
//             display.innerHTML = "";
//             toggleItem(buttons);
//             equal.addEventListener("click", function() {
//                 if(parseInt(display.textContent) != 0){
//                     display.innerHTML = (firstNum / parseInt(display.textContent));
//                 } else {
//                     display.innerHTML = "Cant be divided by 0";
//                     setTimeout(() => {  display.innerHTML = ""; }, 1000);
//                 }
//             });
//         }
//     });
// }