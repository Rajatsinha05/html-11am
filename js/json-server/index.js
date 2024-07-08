import { createUser, DeleteUser, getUser, updateUser } from "./api/user.api.js";


let id = -1
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    if (id == -1) {
        createUser(user)
    }
    else {
        alert("update user")
        updateUser(id, user)
    }


}


const updateInputValue = (ele) => {

    document.getElementById('username').value = ele.username
    document.getElementById('email').value = ele.email
    document.getElementById('password').value = ele.password
    document.getElementById('submit').value = "update user"
    id = ele.id
}


const Mapper = (data) => {

    data.map((ele) => {

        let username = document.createElement("h3")
        username.innerHTML = ele.username;
        let email = document.createElement("h4")
        email.innerHTML = ele.email;
        let password = document.createElement("p")
        password.innerHTML = ele.password;
        let update = document.createElement("button")
        let deleteUser = document.createElement("button")
        update.innerHTML = "Update User"
        update.addEventListener("click", () => updateInputValue(ele))
        deleteUser.innerHTML = "Delete User"

        deleteUser.addEventListener("click", () => {
            DeleteUser(ele.id)
        })
        let div = document.createElement("div")
        div.append(username, email, password, update, deleteUser)
        document.getElementById("userList").append(div)
    })


}

let data = await getUser()
Mapper(data)


document.getElementById("userData").addEventListener("submit", handleData);