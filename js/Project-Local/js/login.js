import getValue from "../components/helper.js";

const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getValue("email"),
        password: getValue("password")
    }


    console.log(user);
    localStorage.setItem("isLogin", true)
    // window.location.href = "/Project-Local/"

}


document.getElementById("Userdata").addEventListener("submit", handleData)