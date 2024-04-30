let myName = 'Hello Marwa Elfituri' ; i = 1 ;

function move() {

document.querySelector('p').textContent = myName.slice (0 , i);

i++ 
if (i > myName.length) {
        i = 1; 
}
};

setInterval (function (){
    move();
}, 250)

