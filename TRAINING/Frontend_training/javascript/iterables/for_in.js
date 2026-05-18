// for_in is used for objects

const students={
    name:"tony",
    rollNo:1234,
    stream:"cse"
}
let info=""
for (let keys in students){
    info+=keys +" : " +students[keys] +"<br>"
}
document.querySelector(".forIn").innerHTML=info
