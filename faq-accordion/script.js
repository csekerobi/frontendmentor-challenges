const accorditionButtons = document.querySelectorAll(".acc-btn");

accorditionButtons.forEach((button) => {
  //iterates throught every button

  // event listener
  button.addEventListener("click", () => {
    // declare the variables for icons and desc
    const description = button.nextElementSibling;
    const plusIcon = button.querySelector(".plus-icon");
    const minusIcon = button.querySelector(".minus-icon");

    // toggle visibility
    description.classList.toggle("show"); // add/remove 'show' class

    // check is element has 'show' class
    const isVisible = description.classList.contains("show");

    // determine display style
    plusIcon.style.display = isVisible ? "none" : "block"; // has 'show'? hide the plus icon otherwise display it
    minusIcon.style.display = isVisible ? "block" : "none"; // opposite of above code for the minus icon
  });
});
