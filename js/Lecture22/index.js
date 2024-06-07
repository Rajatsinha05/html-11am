
document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let user = {
        username: document.querySelector("#username").value,
        number: document.querySelector("#number").value,
        age: document.querySelector("#age").value,
        password: document.querySelector("#password").value
    }
    let flag = false;
    const validUsername = /^[0-9A-Za-z]{8,26}$/;
    if (validUsername.test(username)) {
        // true
    }
    else {

    }
    const isStrongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

    const isValidNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/


    console.log(isValidNumber.test(user.number));


    console.log("user: " + user.username);

})

const handleValidationError = (regex, id, errId, eMsg, sMsg) => {
    let value = document.getElementById(id)
    if (regex.test(value.value)) {
        let input = document.getElementById(id)
        input.classList.remove("usernameerr")
        input.classList.add("valid")
        document.getElementById(errId).innerHTML = sMsg
    }
    else {
        let input = document.getElementById(id)
        input.classList.add("usernameerr")
        document.getElementById(errId).innerHTML = eMsg
    }
}

const isValidNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
const validUsername = /^[0-9A-Za-z]{8,26}$/;
document.querySelector("#username").addEventListener("keypress", () => {

    handleValidationError(validUsername, "username", "u-err", "not a valid username", "valid username")
})
document.querySelector("#number").addEventListener("input", () => {
    document.getElementById("number").style.outline = "none"
    handleValidationError(isValidNumber, "number", "n-err", "not a valid number", "valid number")
})