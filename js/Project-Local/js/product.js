import navbar from "../components/Navbar.js";
import getValue from "../components/helper.js";
document.getElementById("navbar").innerHTML = navbar()

let proudcts = JSON.parse(localStorage.getItem("products")) || []


const Mapper = (data) => {
    document.getElementById("productList").innerHTML = ""
    data.map((ele) => {
        let img = document.createElement("img")
        img.src = ele.img
        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let category = document.createElement("p")
        category.innerHTML = ele.category
        let btn = document.createElement("button")
        btn.innerHTML = "Buy"
        let div = document.createElement("div")
        div.append(img, title, price, category, btn)
        document.getElementById("productList").append(div)
    })
}

Mapper(proudcts)




const HandleSort = (orderBy) => {
    if (orderBy == "LTH") {
        let temp = proudcts.sort((a, b) => a.price - b.price)
        Mapper(temp)
        console.log(temp);
    }
    else {
        let temp = proudcts.sort((a, b) => b.price - a.price)
        console.log(temp);
        Mapper(temp)
    }

}


const handleFilter = (category) => {
    let temp = proudcts.filter((ele) => ele.category == category)
    Mapper(temp)

}



// searching 


const handleSearch = (value) => {
    let temp = proudcts.filter((ele) => ele.title.includes(value))
    Mapper(temp)
}



const handleSearchData = (e) => {
    e.preventDefault()

    let value = getValue("searchValue")

  handleSearch(value)

}




document.getElementById("searching").addEventListener("submit", handleSearchData)

document.getElementById("LTH").addEventListener("click", () => HandleSort("LTH"))
document.getElementById("HTL").addEventListener("click", () => HandleSort("HTL"))

document.getElementById("men").addEventListener("click", () => handleFilter("men"))
document.getElementById("women").addEventListener("click", () => handleFilter("women"))
document.getElementById("kids").addEventListener("click", () => handleFilter("kids"))





