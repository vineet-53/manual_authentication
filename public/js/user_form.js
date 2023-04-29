// checking required field
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
form.addEventListener("submit", e => {
  inputs.forEach(input => {
    if (input.value === "")  e.preventDefault();
  });
});
