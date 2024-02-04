/* ////////////////////////////////
  ////  login related events  ////
 //////////////////////////////// */

let get_started_button = document.querySelector(".start_button");

let login_popup = document.querySelector(".login-container");
let login_exit = document.querySelectorAll("#login-exit");
let login_button = document.querySelector("#login-button");

let signup_popup = document.querySelector(".signup-container");
let signup_exit = document.querySelectorAll("#signup-exit");
let signup_button = document.querySelector("#signup-button");

// if "get started" is clicked
get_started_button.onclick = () => {
  // TODO
  login_popup.classList.remove("hidden");
}

login_exit.forEach(e => {
  e.onclick = () => {
    login_popup.classList.add("hidden");
  }
});

signup_exit.forEach(e => {
  e.onclick = () => {
    signup_popup.classList.add("hidden");
  }
});

// if "logout" is clicked
// TODO