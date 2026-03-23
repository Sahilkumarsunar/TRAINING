let mySet = new Set([1,2,3,2,4,3,4,3,4,2,3,4,67,8,7,6,5,4,2,2,0,9,8,8,7,76,654,1])
let numbers=[]
for (let num of mySet){
    numbers+=num+","
    document.querySelector(".setOf").innerHTML="Unique nubers : "+numbers
}