let data = [
    {
        title: "test",
        cost: 54676,
        images: [],
        like: 0,
        desc: "",
        comment: []
    },
    {
        title: "test1",
        cost: 54676,
        images: [],
        like: 0,
        comment: []
    },
    {
        title: "test2",
        cost: 54676,
        images: [],
        like: 0,
        comment: []
    }
]
localStorage.setItem("exam", JSON.stringify(data));

const Mapper = (data) => {
    data.map((ele, i) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let div = document.createElement("div")
        div.append(title)

        div.addEventListener("click", () => {
            localStorage.setItem("index", i)
            window.location.href = "/exam/singlePage.html"

        })
        document.getElementById("test").append(div)

    })


}
Mapper(data)