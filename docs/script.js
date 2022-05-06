// selecting already existing element

let  body = document.querySelector('body');
let Main = document.querySelector('main');
let toggleNavBtn = document.querySelector('#toggleBtn');
let inputField = document.querySelector('#item-inpt');
let addBtn = document.querySelector('#item-btn');
let toggleNav = document.querySelector('nav');
let navRemoveBtn = document.querySelector('#navCancelBtn');
let darkModeBtn = document.querySelector('#darkBtn');
let lightMoodBtn = document.querySelector('#lightBtn');
let ItemUl = document.querySelector('#item-ul')


// adding eventlistener to track events such as clicks

toggleNavBtn.addEventListener('click',toggleNavBar);
navRemoveBtn.addEventListener('click',removeNav);
addBtn.addEventListener('click',addtask);
darkModeBtn.addEventListener('click',darkMode);
lightMoodBtn.addEventListener('click',lightMood);

// CREATING FUNCTIONS TO CARRY OUT OPERATIONS


function toggleNavBar(){
    toggleNav.style.width = '100%';
}


function removeNav(){
    if(toggleNav.style.width === '100%'){
        toggleNav.style.width = '0%';
    }
}


function darkMode(){
    if(toggleNav.style.width === '100%'){
        toggleNav.style.width = '0%';
    }
    body.style.background = 'linear-gradient(55deg,black,rgb(0, 0, 12),black)';
    toggleNavBtn.style.color = 'white';
    inputField.style.color = 'white';
}

function lightMood(){
    if(toggleNav.style.width === '100%'){
        toggleNav.style.width = '0%';
        body.style.background = 'linear-gradient(55deg, rgb(6, 185, 6), skyblue, rgb(44, 142, 180))';
        toggleNavBtn.style.color = 'black';
    }
}
addBtn.removeEventListener

function addtask(){
    let itemLi = document.createElement('li');
    itemLi.className = 'items';
    ItemUl.appendChild(itemLi);
    itemLi.appendChild(document.createTextNode(inputField.value));

    let divContainer = document.createElement('div');
    divContainer.className = 'checkBtnDiv';
    itemLi.appendChild(divContainer);

    let checkBox = document.createElement('input');
    checkBox.className = 'chckBox';
    checkBox.setAttribute('type','checkbox');
    divContainer.appendChild(checkBox);
    
    let deleteItem = document.createElement('input');
    deleteItem.className = 'delete';
    deleteItem.setAttribute('type','submit');
    deleteItem.setAttribute('value','x');
    divContainer.appendChild(deleteItem);
    deleteItem.addEventListener('click',removeItem);

    function removeItem(){
        ItemUl.removeChild(itemLi);
    }
}