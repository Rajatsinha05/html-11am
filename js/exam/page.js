
let index = localStorage.getItem("index")

let exam = JSON.parse(localStorage.getItem("exam")) || []

document.getElementById("title").innerHTML = exam[index].title
console.log(exam[index]);


let commentValue = "comment"
exam[index].comment.push(commentValue)
localStorage.setItem("exam", JSON.stringify(exam))