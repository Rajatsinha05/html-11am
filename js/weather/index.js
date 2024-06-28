

const mapper=(data)=>{
console.log(data.name);
}

const getData = async (cityName) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let res = await req.json()
    console.log(res);
    mapper(res)

}




const handleData = (e) => {
    e.preventDefault();

    let cityName = document.getElementById('cityName').value;

    getData(cityName)
}


document.getElementById("search").addEventListener("submit", handleData)