// Your code goes here

//1. `mouseover`
/* nav link hover effect*/
const navHover = document.querySelectorAll('nav a');
navHover.forEach(link => link.addEventListener('mouseenter', (event) => 
{ event.target.style.color = '#17A2B8';
}))
navHover.forEach(link => link.addEventListener('mouseout', (event) => 
{ event.target.style.color = '#212529';
}))


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
/*add textbox after dropping element*/


//5. `load`



//6. `focus`


//7. `resize`



//8. `scroll`



//9. `select`



//10. `dblclick`