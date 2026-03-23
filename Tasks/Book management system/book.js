let Books = [
  "The Alchemist",
  "Harry Potter and the Sorcerer's Stone",
  "The Lord of the Rings",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Hobbit",
  "The Da Vinci Code",
  "The Hunger Games",
  "The Kite Runner",
  "The Book Thief",
  "The Fault in Our Stars",
  "Rich Dad Poor Dad",
  "Think and Grow Rich",
  "Atomic Habits",
  "The Power of Habit",
  "The 7 Habits of Highly Effective People",
  "How to Win Friends and Influence People",
  "Wings of Fire",
  "Sapiens",
  "The Psychology of Money",
  "The Girl on the Train",
  "Gone Girl",
  "The Chronicles of Narnia",
  "A Game of Thrones",
  "The Shining",
  "The Silent Patient",
];

const edit = document.querySelector(".edit");
const message = document.createElement("span");
const allBook=document.querySelector(".all-books")


const renderBooks = (value, i, parentSection) => {
  const displayCard = document.createElement("div");
  displayCard.classList.add("displayCard");

  const displayCardImg = document.createElement("img");
  displayCardImg.classList.add("displayCardImg");
  displayCardImg.src = "bookImage.jpg";

  const displayCardInfo = document.createElement("div");
  displayCardInfo.classList.add("displayCardInfo");
  displayCardInfo.innerHTML = `
    <h3>${i + 1}. ${value} </h3>
    `;

  parentSection.appendChild(displayCard);
  displayCard.appendChild(displayCardImg);
  displayCard.appendChild(displayCardInfo);
};

const addBook = () => {
  const newBook = document.getElementById("newBook").value;
  Books.push(newBook);
  message.innerHTML = `
  Last update : "${newBook}" Added <br>`;
  edit.appendChild(message);
  renderAllBooks();
};

const removeBook = (last) => {
  if (last) {
    let removedBook = Books.pop();
    message.innerHTML = `
  Last update : "${removedBook}" Removed <br>`;
    edit.appendChild(message);

    renderAllBooks();
  } else {
    let removedBook = Books.shift();
    message.innerHTML = `
  Last update : "${removedBook}" Removed <br>`;
    edit.appendChild(message);
    renderAllBooks();
  }
};

const dltBook = () => {
  const bookIndex = Number(document.getElementById("bookIndex").value);
  const dltedBook = Books.splice(bookIndex, 1);
  message.innerHTML = `
  Last update : "${dltedBook}(${bookIndex+1})" Removed`;
  edit.appendChild(message);
  renderAllBooks();
};

const updateBook = () => {
  const updateBookIndex = document.getElementById("updateBookIndex").value;
  const updatedBook = document.getElementById("updatedBook").value;
  message.innerHTML = `
  Last update : "${Books[updateBookIndex]}" Replaced with "${updatedBook}"`;
  edit.appendChild(message);
  Books[updateBookIndex] = updatedBook;
  renderAllBooks();
};

const copyBook = () => {
  const from = Number(document.getElementById("copyFrom").value);
  const to = Number(document.getElementById("copyTo").value);
  Books.copyWithin(to, from);
  message.innerHTML = `
  Last update : "${Books[from]}" copied to "${to + 1}" from "${from + 1}"`;
  edit.appendChild(message);
  renderAllBooks();
};

const renderAllBooks = () => {

  const allBookSection = document.querySelector(".all-books-section");
  const displaySection = document.querySelector(".display-section");
  allBookSection.innerHTML = "";
  displaySection.innerHTML = "";
  Books.forEach((value, i) => {
    renderBooks(value, i, allBookSection);
  });

  const displayBooks = Books.slice(5, 9);
  displayBooks.forEach((value, i) => {
    renderBooks(value, i, displaySection);
  });
  allBook.innerHTML=`
<h2>-All Books (${Books.length})-</h2>
`
};
renderAllBooks();

const addBtn = document.querySelector("#addBook");
addBtn.addEventListener("click", addBook);

const remFirstBtn = document.querySelector("#first");
remFirstBtn.addEventListener("click", () => {
  let last = false;
  removeBook(last);
});
const remLastBtn = document.querySelector("#last");
remLastBtn.addEventListener("click", () => {
  let last = true;
  removeBook(last);
});

const dltBtn = document.querySelector("#dltBtn");
dltBtn.addEventListener("click", dltBook);

const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", updateBook);

const copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click", copyBook);

const editBtn = document.getElementById("edit-icon");
editBtn.innerHTML=
`<i class="fa-solid fa-pen-to-square" > </i>` 
editBtn.addEventListener("click", () => {
  edit.classList.toggle("active");
editBtn.innerHTML=edit.classList.contains("active")
?`<i class="fa-solid fa-x"></i> ` : 
`<i class="fa-solid fa-pen-to-square" ></i>`
})
