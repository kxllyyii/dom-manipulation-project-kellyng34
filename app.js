

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".firstName"),
    lastName: document.querySelector(".lastName"),
    pic: document.querySelector(".pic"),
    container: document.querySelector(".container"),
};

  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const pic = DOMSelectors.pic.value

    function divCreator(){
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div class="container">
              <div class="card">
                ${firstName}
                <p>Your Food</p>
                <img src="${pic}" alt="" class="cardimg">
                ${lastName}
                <button class="button">Remove</button>
              </div>
            </div>`
            )};
          divCreator();
        
        }
    );

function clear(){
        DOMSelectors.form.addEventListener("submit", function(event){
          event.preventDefault();
          DOMSelectors.firstName.value = "";
          DOMSelectors.lastName.value= "";
          DOMSelectors.pic.value= "";
     });
    }
    clear();

function remove() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const objectToRemove = event.target.closest(".card");
      objectToRemove.remove();
    });
  });
}

remove();