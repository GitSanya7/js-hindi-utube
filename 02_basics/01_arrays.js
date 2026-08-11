const MyArr=[23,322,22,2333]
// console.log(MyArr)
// console.log(MyArr[1])

// myheroes=new Array("shaktiman","batman")
// console.log(myheroes)
// console.log(myheroes[1])// arrays declare a varible that consits of element of each type it can be string boolean etc

// //deep copy...dont have share same refrential point
// //shallow copy... have share same refrential point.

// //***********ARRAY METHODS**********//

// MyArr.push(41)//PUSH IS USED TO ADD A ELEMENT IN ARRAY

// MyArr.unshift(7)//add element to 1st position
// MyArr.shift()//remove element to 1st position..no input needed
// console.log(MyArr)

// myheroes.push("superman","ironman")
// console.log(myheroes)

// myheroes.pop()//POP REMOVES THE LAST ELEMENT
// console.log(myheroes)

// console.log(myheroes.includes("ironman"))//includes is used to find weather the elemnt is present in the array or not..it return is boolean value i.e true or false

// console.log(myheroes.indexOf("ironman"))
// console.log(myheroes.indexOf("loveman"))//as ironman is not in array it gives -1 if it was present it gives 1

// const thearray = myheroes.join()// join add the array to new array and convert it into string.
// console.log(myheroes)
// console.log(thearray)

//not understood//
// /****slice and spice****/
console.log("a",MyArr)
const myn1=MyArr.slice(1,4)//takes from 1 to 3 index
console.log(myn1)

console.log("b",MyArr)

const myn2=MyArr.splice(0,4)//takes from 0 to 4 index
console.log("c",MyArr)
console.log(myn2)
console.log(typeof myn2)





