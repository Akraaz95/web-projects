const addItem = document.getElementById('item');
const submit = document.querySelector('.btn-act');
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const delBtn = document.querySelector('.delete-item');
const listItem = document.querySelector('.collection');
const clrBtn = document.querySelector('.clr-btn');




function delItem(e){
    if(e.target.className ==='fa fa-remove'){
        e.target.parentElement.parentElement.remove();
    }
}

loadEventListeners();

function loadEventListeners()

{

form.addEventListener('submit',addList);

// Remove item
listItem.addEventListener('click',delItem);

// clear Item
clrBtn.addEventListener('click',clrList)

}

// clear list function
function clrList(e){
    listItem.innerHTML='';
}

function addList(e)
{
    if(taskInput.value === '')
    {
        alert('Add something');
    }
    else{
// Add classname
const addTask =document.createElement('li');
addTask.className='collection-item';
// Add classname into link
const link = document.createElement('a');
link.className='delete-item';
// Add inner tag
link.innerHTML='<i class="fa fa-remove"></i>';
// Append link into li
addTask.appendChild(link);
// Add input value
addTask.appendChild(document.createTextNode(taskInput.value));
// Add li into ul

listItem.appendChild(addTask);

// clear input
taskInput.value = '';
console.log(addTask);
e.preventDefault();
    }
}

