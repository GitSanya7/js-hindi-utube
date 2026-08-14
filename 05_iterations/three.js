//for of
const arr=[11,23,44,42]
for(const num of arr){
    console.log(num)

}
const greeting="hello world"
for(const greet of greeting){
    console.log(greet);
   //console.log(`the spelling is ${greet}`)   
}
///maps

const map=new Map()
map.set('sn',"sanya")
map.set('sy',"sanya yadav")

console.log(map);
for(const [key,value] of map){
    console.log(key,":-",value)
}