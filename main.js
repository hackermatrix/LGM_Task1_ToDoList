const newItem = document.querySelector('.inpField input');
const todoList = document.querySelector('.todolist');                // list of items
const addItemBtn = document.querySelector('.inpField button');         // to add user item in input box

const deleteAllBtn = document.querySelector('.footer button');

console.log(todoList.children.length);

addItemBtn.addEventListener('click', addItem);
todoList.addEventListener('click', deleteOne);
deleteAllBtn.addEventListener('click', deleteAll);


function setTaskCount(){
  let no = todoList.children.length;
  let prevStatement = deleteAllBtn.previousElementSibling;
  prevStatement.textContent = `You have ${no} pending tasks`;
  return no;
}
setTaskCount();
deleteAllBtnActive();

function deleteAllBtnActive(){
  if(setTaskCount() != 0){
    deleteAllBtn.classList.add('active');
    return;
  }
  else{
    deleteAllBtn.classList.remove('active');
  }

}




function addItem(){
  var itemName = newItem.value.trim();
  if(itemName.length == 0){
    alert("Cant Add Empty Task !!");
  }
  else{
    var newli = document.createElement('li');
    newli.innerHTML = `${itemName}<button><i class="fas fa-trash"> </i></button>`;
    todoList.appendChild(newli);
    newItem.value = "";

  }


  setTaskCount();
  deleteAllBtnActive();
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




function deleteOne(e){
  // console.log;
  var clickTar = e.target;
  var clickArea = clickTar.nodeName.toLowerCase();
  if(clickArea == "button" || clickArea == "i"){
    if(clickArea == "i"){
      clickTar = clickTar.parentElement;

    }
     if(confirm('Are You Sure?')){
      var liToDelete = clickTar.parentElement;
      console.log(liToDelete);
      todoList.removeChild(liToDelete);
    }
  }
  setTaskCount();
  deleteAllBtnActive();
}



function deleteAll(){
if(confirm(`Are You Sure You Want To Delete All ${setTaskCount()} Tasks?`)){
  todoList.innerHTML = '';
  deleteAllBtnActive();
  setTaskCount();
}}
