 let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())
console.log(mydate.getTimezoneOffset())
 console.log(typeof mydate)

let mycreateddate=new Date(28,4,7,6,54)
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toLocaleString())
console.log(mycreateddate.toLocaleDateString())
console.log(mycreateddate.toLocaleTimeString())

let thedate=new Date("11-6-2006")
console.log(thedate)
console.log(thedate.toDateString())
console.log(thedate.toLocaleDateString())
 console.log(thedate.toLocaleTimeString())
console.log(thedate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(thedate.getTime())//we can compere the date and time in milisecond my coverting date time using .getTime that coverts date time in milli second

console.log(Date.now()/1000)//it converts the date in seconds
console.log(Math.round(Date.now()))//to remove points
console.log(Math.floor(Date.now()))//to remove points
console.log(Math.ceil(Date.now()))//to remove points

let newdate=new Date()
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getTime())
console.log(newdate.getMonth()+1)
console.log(`${newdate.getDay()} and the time is ${newdate.getTime()}`)
console.log(
    newdate.toLocaleString(`default`,{
    weekday:"short"
    }))//to customize the default date time or year etc''(ctrl+space bar shows the options for cutomizations)
