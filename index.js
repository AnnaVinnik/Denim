"use strict";
const ONE = "one room";
const TWO = "two rooms";
const MY_WHITE = "#faf9f0";

let room = {
    type: ONE,
    price: 100,
    kitchen: false,
};

let rooms = new Array;

rooms.push({
    type: ONE,
    price: 100,
});


rooms.push({
    type: TWO,
    price: 300,
    kitchen: true,
});

function changeText(){
    let message = document.querySelector(".header__name");
    message.innerHTML = `<div class = "messageToUser_italy">Bongiorno, Signorina Anna
        <button onClick="closeIt()">Close</button>
    </div>`;
    setTimeout( () => {
        document.querySelector(".messageToUser_italy").style.opacity = "1";
    }, 1 );
    
}

function closeIt() {
    let popup = document.querySelector(".messageToUser_italy");
    popup.style.opacity = "0";
    popup.style.zIndex = "-10";
}

function sliderRight() {
    let elem_top = document.querySelector('.top');
    let elem_bottom = document.querySelector('.back');
    elem_top.classList.remove('top');
    elem_top.classList.add('left');
    elem_bottom.classList.add('right');
    elem_bottom.classList.add('top');

    setTimeout(() => {  
        elem_bottom.classList.remove('back');
        elem_top.classList.remove('left');  
        elem_top.classList.add('back');  
    }, 2000); 
}

function sliderLeft() {
    let elem_top = document.querySelector('.top');
    let elem_bottom = document.querySelector('.back');
    elem_top.classList.remove('top');
    elem_top.classList.add('right');
    setTimeout(() => {  elem_bottom.classList.add('top');
        elem_bottom.classList.remove('back');
        elem_top.classList.remove('right');  
        elem_top.classList.add('back');  
    }, 2000); 
}

document.body.style.background = MY_WHITE;