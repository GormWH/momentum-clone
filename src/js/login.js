// check if user exists and if not, create user with login form
function login() {
    const login = document.querySelector("#login-container");
    const main = document.querySelector("#main-container");
    const savedUser = localStorage.getItem("user");

    // if user exists, show main contents
    if (savedUser !== null) {
        return main.classList.remove("hidden");
    }

    // if user doesn't exist, show login form
    login.classList.remove("hidden");

    const loginForm = document.querySelector("login-container form");
    const loginInput = document.querySelector("#login-container input");
    function userLogin(event) {
        event.preventDefault();
        const user = loginInput.value;
        localStorage.setItem("user", user);
        login.classList.add("hidden");
        main.classList.remove("hidden");
    }
    login.addEventListener("submit", userLogin);
}

login();