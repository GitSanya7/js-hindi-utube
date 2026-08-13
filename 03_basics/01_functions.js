
// //     function sayMyName() {
// //     console.log("s");
// //     console.log("a");
// //     console.log("n");
// //     console.log("y");
// //     console.log("a");
// // }

// // sayMyName(); // function call

// function saw (number1,number2)//parameters
// {
//     console.log(number1+number2)
// }
// saw(2,3)//arguments


// function addNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addNumbers(3, 5)

// // console.log("Result: ", result);

function calculatecartprice(val1,val2,...num1){
     return num1
}
console.log(calculatecartprice(77,71,86))

let detail={
    username:"sanya",
    price:1000
}

function handleobjct(anyobject){
    console.log(`hi my name is ${anyobject.username} and my course price is ${anyobject.price}`);
}
handleobjct(detail)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));