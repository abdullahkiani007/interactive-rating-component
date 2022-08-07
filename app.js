let isSelect = false;
let submitButton = document.querySelector(".submit");
let rating;
let thankSec = document.querySelector(".thankYou");
let ratingSec = document.querySelector(".rating");
let userRating = document.querySelector("#userRating");

let buttons = document.querySelectorAll(".number_items");

for (button of buttons){
    button.addEventListener('click',(event)=>{
        let btn = event.target;
        rating = btn.innerText
        userRating.textContent = rating;
        checkClick(rating);
    });
}
function checkClick(rating){
    for (b of buttons){
        if (b.innerText == rating)
            b.classList.add('onClick');
        else
        b.classList.remove('onClick');
    }
}

submitButton.addEventListener('click',()=>{
    if(rating){
       thankSec.classList.remove("hidden");
       ratingSec.classList.add('hidden');
    }
    else
        alert("you need to select an option");
 
})
