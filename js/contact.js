const form = document.querySelector("#form");
const name = document.querySelector("#name");
const nameError = document.querySelector(".nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector(".messageError");
const submit = document.querySelector(".submit");

submit.style.filter = "grayscale(100%)";

function checkAllInput() {
  if (checkLength(name.value, 5) && checkEmail(email.value) &&
    checkLength(subject.value, 10) && checkLength(message.value, 15)) {
    submit.disabled = false;
    submit.style.filter = "grayscale(0%)";

  } else {
    submit.disabled = true;
    submit.style.filter = "grayscale(100%)";
  }
}

name.addEventListener("keyup", checkAllInput);
email.addEventListener("keyup", checkAllInput);
message.addEventListener("keyup", checkAllInput);
subject.addEventListener("keyup", checkAllInput);

name.addEventListener("blur", (event) => {
  if (checkLength(name.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
});

name.addEventListener("focus", (event) => {
  if (name) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
});

email.addEventListener("blur", (event) => {
  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
});

email.addEventListener("focus", (event) => {
  if (email) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
});

subject.addEventListener("blur", (event) => {
  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
});

subject.addEventListener("focus", (event) => {
  if (subject) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
});

message.addEventListener("blur", (event) => {
  if (checkLength(message.value, 15)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
});

message.addEventListener("focus", (event) => {
  if (message) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
});

function submitForm(event) {
  event.preventDefault();

  form.reset();

  setTimeout(() => {
    alert("Your message has been sent!");
  }, 100);
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const checkPattern = regEx.test(email);
  return checkPattern;
}