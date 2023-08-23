

//getting the elements from the DOM

let minusButton = document.querySelector('.minus');
let plusButton = document.querySelector('.plus');
let counter = document.querySelector('.counter');


// Implementing count functionality

let countFunctionality = ()=>{
    let count = 0;
    return val=>{
        if(val === "-"){
            counter.innerText = --count;
        }
        else{
            counter.innerText = ++count;
        }
    }
}

//adding event listener

let countFunction = countFunctionality();
minusButton.addEventListener("click",()=>{
    countFunction("-");
})

plusButton.addEventListener("click",()=>{
    countFunction("+");
})