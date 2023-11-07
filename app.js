

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".firstName"),
    lastName: document.querySelector(".lastName"),
    pic: document.querySelector(".pic"),
    box: document.querySelector(".box"),
    button: document.querySelector(".button"),
};

/* console.log(DOMSelectors.firstName); */

function divCreater(firstName, lastName, pic){
    DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="container"><div class="card">${firstName}<p>Your Animal</p><img scr="${pic}" alt=""class="cardimg">${lastName}<button class = "button">Remove</button></div>`
    )};

function insert(){
    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        const firstName = DOMSelectors.firstName.value
        const lastName = DOMSelectors.lastName.value
        const pic = DOMSelectors.pic.value
        divCreater(firstName, lastName, pic)
        const remove= document.querySelectorAll(".button");
        remove.forEach((button)=> {
            button.addEventListener("click", function(event){
                const objectToRemove =  event.target.parentElement;
                objectToRemove.remove();
            });
        });
    });
}

    insert()
   
function clear(){
    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        DOMSelectors.firstName.value = "";
        DOMSelectors.lastName.value= "";
        DOMSelectors.pic.value= "";
    });
}
clear()



