// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "sanya",
    "full name": "sanya",//if any key is in string form than we can acees that key by using sq bracket in string form
    [mySym]: "mykey1",//mysym is used and run with sq bracket otherwise the typepf output is string not symbol
    age: 18,
    location: "Jaipur",
    email: "sanya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sanya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sanya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

let JsUser2={
    name:"sanya"}
JsUser.greeting4 = function(){ 
    console.log(`hello ${this.name}`)}
    console.log(JsUser.greeting4())