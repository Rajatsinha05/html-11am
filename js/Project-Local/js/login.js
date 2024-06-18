import navbar from "../components/Navbar.js";
import getValue from "../components/helper.js";
let userdetails = JSON.parse(localStorage.getItem("user"));
document.getElementById("navbar").innerHTML = navbar()



const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getValue("email"),
        password: getValue("password")
    }


    if (userdetails) {

        if (userdetails.email != user.email) {
            alert("user not found " + user.email);
        }
        else if (userdetails.password != user.password) {
            alert("password mismatch " + user.password);
        }
        else {
            alert("logged in " + user.email);
            document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
            // window.location.href = "/Project-Local/"
            localStorage.setItem("isLogin", true)
        }
    }
    else {
        alert("please sign up ")
        window.location.href = "/Project-Local/pages/Signup.html"

    }




    // window.location.href = "/Project-Local/"

}


document.getElementById("Userdata").addEventListener("submit", handleData)