
const GetValue = (id) => {
    return document.getElementById(id).value;
}
const Cal = (opr, num1, num2) => {
    let result;
    if (opr == "+") {
        result = Number(num1) + Number(num2);
    }
    else if (opr == "-") {
        result = Number(num1) - Number(num2);
    }
    return result;
}


const Get = () => {

    let num1 = GetValue("num1");
    let num2 = GetValue("num2")
    let opr = GetValue("opr");

    let result = Cal(opr, num1, num2);
    document.getElementById("result").innerHTML = `result: ${result}`

}