let products = JSON.parse(localStorage.getItem('products')) || [];

const deleteProduct = (id) => {
    console.log(id);
    products.splice(id, 1);
    uiMaker(products)
    localStorage.setItem("products", JSON.stringify(products))
}

const uiMaker = (data) => {
    document.getElementById("products").innerHTML = ""
    data.map((ele, index) => {
        let img = document.createElement('img');
        img.src = ele.img
        let title = document.createElement('h4');
        title.innerHTML = ele.title
        let price = document.createElement('p');
        let category = document.createElement('span');
        category.innerHTML = ele.category
        let btn1 = document.createElement('button');
        btn1.innerHTML = "Delete"
        btn1.addEventListener('click', () => deleteProduct(index))
        let btn2 = document.createElement('button');
        btn2.innerHTML = "Buy"
        let div = document.createElement('div');
        div.append(img, title, price, category, btn1, btn2)
        document.getElementById("products").append(div);
    })
}

uiMaker(products)