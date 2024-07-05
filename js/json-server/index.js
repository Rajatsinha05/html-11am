import { createUser, getUser } from "./api/user.api.js";

const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    createUser(user)

}

getUser()


document.getElementById("userData").addEventListener("submit", handleData);