const coding=["java","python","c","css"]
coding.forEach(function(val){
    //console.log(val);
    
})
coding.forEach((val) => {
    //console.log(val);
})
function printMe (val,index,arr){
    console.log(val,index,arr);
    
}
coding.forEach(printMe)
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
