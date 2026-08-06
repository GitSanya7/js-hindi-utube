const accountId=1234
let accountEmail="sanya@gmail.com"
var accountPassword="1234"
accountCity="vns"
let accountState;  //js gives output as UNDEFINED if the value is not assigned 

//accountId=2222 not allowed coz constant cant be change its single only
console.log(accountId)

/*prefer not to use Var coz of the issue in
block scope and functional scope*/

accountEmail="hello@gmail.com"
accountPassword="2121"
accountCity="bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//console.table([]) is used to run too many keywords at once

