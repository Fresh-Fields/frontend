import { login } from "./accounts.js";

let loginForm = document.querySelector(".login");
let loginPopper = document.querySelector(".login-popper");
let loginSubmit = loginForm.querySelector("button");

let signupForm = document.querySelector(".signup");
let signupPopper = document.querySelector(".signup-popper");
let signupSubmit = signupForm.querySelector("button");


loginPopper.onclick = () => {
  loginForm.style.visibility = "visible";
}

signupPopper.onclick = () => {
  signupForm.style.visibility = "visible";
}

window.onkeydown = e => {
  if (e.key != "Escape") return;
  loginForm.style.visibility = "hidden";
  signupForm.style.visibility = "hidden";
}
