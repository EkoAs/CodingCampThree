// DOM (Document Object Model) Manipulation Examples

// 1. Selecting Elements
const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const querySelector = document.querySelector('.myClass'); // first match
const querySelectorAll = document.querySelectorAll('.myClass'); // all matches

// 2. Creating Elements
const newDiv = document.createElement('div');
const newText = document.createTextNode('Hello World');

// 3. Modifying Content
elementById.textContent = 'New text content';
elementById.innerHTML = '<strong>Bold text</strong>';
elementById.innerText = 'Visible text only';

// 4. Modifying Attributes
elementById.setAttribute('data-value', '123');
elementById.getAttribute('data-value');
elementById.removeAttribute('data-value');
elementById.id = 'newId';
elementById.className = 'newClass';
elementById.classList.add('active');
elementById.classList.remove('active');
elementById.classList.toggle('active');

// 5. Modifying Styles
elementById.style.color = 'red';
elementById.style.backgroundColor = 'blue';
elementById.style.fontSize = '16px';

// 6. Adding/Removing Elements
const parent = document.getElementById('parent');
parent.appendChild(newDiv); // add to end
parent.insertBefore(newDiv, parent.firstChild); // add to beginning
parent.removeChild(newDiv); // remove child
newDiv.remove(); // remove self

// 7. Event Listeners
elementById.addEventListener('click', function(event) {
    console.log('Element clicked!', event);
});

elementById.addEventListener('mouseover', (e) => {
    e.target.style.color = 'green';
});

// 8. Traversing DOM
const parentElement = elementById.parentElement;
const children = elementById.children;
const firstChild = elementById.firstElementChild;
const lastChild = elementById.lastElementChild;
const nextSibling = elementById.nextElementSibling;
const previousSibling = elementById.previousElementSibling;

// 9. Practical Example: Todo List
function createTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());
    
    li.appendChild(deleteBtn);
    return li;
}

// Usage: document.getElementById('todoList').appendChild(createTodoItem('Buy groceries'));
