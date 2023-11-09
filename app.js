

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    pic: document.querySelector("#pic"),
    container: document.querySelector(".container"),
};

  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    const food= {
     firstName : DOMSelectors.firstName.value,
     lastName : DOMSelectors.lastName.value,
     pic : DOMSelectors.pic.value,

    }
    divCreator(food);
    clear();
    remove();
  });


    function divCreator(apple){
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div class="card">
                <h2>${apple.firstName}</h2>
                <h2> ${apple.lastName}</h2>
                <h4>Your Food</h4>
                <img src="${apple.pic}" alt="" class="cardimg">
                <button class="button">Remove</button>
            </div>`
            )};
      

  function clear(){
          DOMSelectors.firstName.value = "";
          DOMSelectors.lastName.value= "";
          DOMSelectors.pic.value= "";
  };


function remove() {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    
    });
  });
}