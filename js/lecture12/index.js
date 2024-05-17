

// console.log(...arr);
// arr.sort((a, b) => a - b)
// console.log(arr[arr.length - 1], arr[0]);
// console.log(...arr);


// for (let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
// }

let arr = [5, 4, 60, 7, 9, 1, 11, 20]
arr.sort((a, b) => a - b)

let i = 0;
let j = arr.length - 1

while (i <= j) {

    if (i == j) {
        console.log(arr[i]);

        i++
        j--
    }
    else {

        console.log(arr[i++], arr[j--]);

    }

}