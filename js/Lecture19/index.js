
const divide = (a, b) => {
    if (a == 0) {
        throw new Error("Invalid division a ")
    }
    if (b == 0) {
        throw new Error("Invalid division b")
    }

    return a / b
}
console.log("starting");

try {
    console.log(divide(10, 0));
}
catch (err) {

    console.log("error: " + err + ": " + err);
}
console.log("working");