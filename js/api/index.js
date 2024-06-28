
const Mapper = (data) => {


}



const getData = async () => {

    let req = await fetch("https://fakestoreapi.com/products")
    let res = await req.json()
    Mapper(res)
}


getData()