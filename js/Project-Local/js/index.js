
let isLogin = localStorage.getItem("isLogin") || false;

if(!isLogin) {
    window.location.href="/Project-Local/pages/Signup.html"
}
