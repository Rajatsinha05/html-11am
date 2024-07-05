import { login } from "./api/user.api.js";

const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    login(user)


}
document.getElementById("userData").addEventListener("submit", handleData);