// Your code goes here

//1. `mouseover`
/* animate header image*/

//2 .`keydown`
/*offer help*/
const wholePage = document.querySelector('body');
wholePage.addEventListener('keydown', event=> {
    return window.confirm("Would you like to chat with an agent?");
})
//3. `wheel`

/*change header background color to match footer*/
const wheelie = document.querySelector('.main-navigation');
console.log(wheelie);
wheelie.addEventListener('wheel', (event) => 
{ event.target.style.backgroundColor = '#FFEBCD';
});


//4. `drag / drop`



//5. `load`



//6. `focus`


//7. `resize`



//8. `scroll`



//9. `select`



//10. `dblclick`