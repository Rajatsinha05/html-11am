
let products = JSON.parse(localStorage.getItem('products')) || {};

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
        category: document.getElementById("category").value
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products))
    window.location.href="/Lecture27/index.html"
}

document.getElementById("form").addEventListener("submit", handleData)