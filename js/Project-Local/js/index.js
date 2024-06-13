import navbar from "../components/Navbar.js";
import { sub, sum } from "../components/test.js";
let userdetails = JSON.parse(localStorage.getItem("user"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Project-Local/pages/Signup.html"
}


// console.log(navbar());

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}


