import navbar from "../components/Navbar.js";
import { sub, sum } from "../components/test.js";

let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Project-Local/pages/Signup.html"
}


// console.log(navbar());

document.getElementById("navbar").innerHTML = navbar()


console.log(sum(10,20));

console.log(sub(30,10));