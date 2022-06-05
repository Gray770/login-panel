const loginForm = document.getElementById("form");
const loginButton = document.getElementById("submit");
const error = document.getElementById("error");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const user = loginForm.user.value;
    const password = loginForm.password.value;

    if (user === "" && password === "") {
        error.innerText = "Name and password required";
    }
    if (user.length > 0 && password.length === 0) {
        error.innerText = "Password required";
    }
    if (user.length === 0 && password.length > 0) {
        error.innerText = "Name required";
    }
    if (user === "user" && password === "123") {
        loginButton.innerText = "SUCCESSFUL";
        setTimeout(
            function(){
                window.location.replace("https://youtu.be/eaEMSKzqGAg");
            },
        1000);
        }
    } 
)
