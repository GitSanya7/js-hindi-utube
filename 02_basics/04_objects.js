// //const tinderuser=new Object()//singleton
 const tinderUser= {}//nonsingleton
 tinderUser.id="abc1234"
 tinderUser.isloggedIn="false"

// console.log(tinderUser)

// const newuser={
//     email:"sanya@google.com",
//     name:{
//       fullname:{
//         firstname:"sanya",
//         lastname:"yadav"
//     }
//   }
// }
// console.log(newuser)
// console.log(newuser.email)
// //console.log(newuser.fullname)
// console.log(newuser.name.fullname)
// obj1={1:"a",2:"b"}
// obj2={3:"c",4:"d"}
// //let obj3=Object.assign(obj1,obj2)//or
// let obj4=Object.assign({},obj1,obj2)//or
// let obj3={...obj1,...obj2}//spread method used to join multiple obj in one obj
// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



