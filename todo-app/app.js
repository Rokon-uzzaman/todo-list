//invoking elements from html document
let inputText = document.getElementById("ourform");
let inputField = document.getElementById("ourfield");
let inputList = document.getElementById("ourlist");
let saveInd = document.getElementById("saveIndex");
let bt = document.getElementById("bt");

const todoItems = [];

const addItem = item => {
  if (item.length == 0) {
    todoItems = [];
  } else {
    todoItems.push(item);
  }
};
inputText.addEventListener("submit", e => {
  e.preventDefault();

  addItem(inputField.value);
  showItems();
  inputField.value = "";
  inputField.focus();
});
const showItems = () => {
  const todoItemsDiv = document.getElementById("todo-container");
  const olElm = document.getElementById("ourlist");
  olElm.innerHTML = "";

  todoItems.forEach((todo, ind) => {
    let liElm = document.createElement("li");
    let btn1 = createButton("button", "Edit");
    let btn2 = createButton("button", "Delete");

    let textTodo = document.createTextNode(todo);
    btn2.addEventListener("click", function (e) {
      deleteItem(olElm, ind);
    });
    btn1.addEventListener("click", function (e) {
      editItem(ind);
    });

    liElm.appendChild(textTodo);
    liElm.appendChild(btn1);

    liElm.appendChild(btn2);

    olElm.appendChild(liElm);
  });

  todoItemsDiv.appendChild(olElm);
};

function deleteItem(olElm, delItem) {
  todoItems.splice(delItem, 1);
  olElm.removeChild(olElm.childNodes[delItem]);
}
function editItem(ind) {
  saveInd.value = ind;
  inputField.value = todoItems[ind];
  let inp = inputField.value;
  console.log(inp);
  bt.addEventListener("click", function (e) {
    console.log(inputField.value);
    // console.log(e.target);
    //console.log("rr");
    //todoItems[ind] = inp;
    todoItems.splice(todoItems[ind], 1, inputField.value);
  });
}

//const editItem = (itemId, item) => todoItems.splice(itemId, 1, item);

function createButton(tagName, InerHtml) {
  let tag = document.createElement(tagName);
  tag.innerHTML = InerHtml;
  return tag;
}

showItems();

// inputText.addEventListener("submit", e => {
//   e.preventDefault();
//   createItems(inputfield.value);
// });

// function createItems(x) {
//   let ourHtml = `<li>${x} <button onclick="editItems(this)">Edit</button> <button onclick="deleteItems(this)">Delete</button>  </li>`;
//   inputlist.insertAdjacentHTML("beforeend", ourHtml);

// }

// function deleteItems(deleteitem) {
//   deleteitem.parentElement.remove();

//   console.log(deleteItem);
// }
