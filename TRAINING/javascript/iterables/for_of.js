// for_in is used for objects

const names="tony"
const arr=[1,2,3,4,5,6,4,3,5,6]
let letters=""
let number=[]
for (let letter of names){
    letters+=letter
document.querySelector(".forOf").textContent=`letter :${letters}`
}
for (let num of arr){
    number+=num+","
    document.querySelector(".forOfArr").innerHTML="Elements : "+number
}

  