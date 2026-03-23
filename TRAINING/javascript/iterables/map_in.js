let myMap = new Map([
  ["Apple", 2],
  ["Banana", 5],
  ["Mango", 3],
  ["Grapes", 4],
  ["Pineapple", 2],
]);
let information=""
for (let [fruits, quantity] of myMap) {
  information += fruits + ":" + quantity+"<br/>";
  document.querySelector(".mapOf").innerHTML = information;
}
