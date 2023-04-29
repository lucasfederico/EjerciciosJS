const namesa = document.querySelector("#name");
const email = document.querySelector("#email");
const num = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (namesa.value == "") {
    alert("Complete el campo por favor");
    namesa.focus();
  } else if (email.value == "") {
    alert("Complete el campo por favor");
    email.focus();
  } else if (email.value.includes("@") && email.value.includes(".com")) {
    alert("No es un email valido");
  } else if (num.value == "") {
    alert("Complete el campo por favor");
    num.focus();
  }
});
