
let count = localStorage.getItem("count") || 0;
// let count = sessionStorage.getItem("count") || 0;
document.getElementById("count").innerHTML = count
console.log(count);

const counter = () => {
    count++;
    document.getElementById("count").innerHTML = count
    localStorage.setItem("count", count)
    // sessionStorage.setItem("count", count)
}

document.getElementById("btn").addEventListener("click", counter);