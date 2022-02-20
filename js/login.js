//local storage login
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "myUsername"

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGteetings(username);
};

loginForm.addEventListener("submit", onLoginSubmit);

function paintGteetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGteetings(savedUsername);
};

//TO-DO 로그아웃