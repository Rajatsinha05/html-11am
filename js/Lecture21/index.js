
let min = 1
let sec = 10


let id = setInterval(() => {
    console.log(`${min} : ${sec}`);
    sec = sec - 1
    if (min == 0 && sec == 0) {
        clearInterval(id)
    }
    if (sec == 0) {
        min = min - 1
        sec = 10
    }


}, 1000)