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
wheelie.addEventListener('wheel', event => 
{ event.target.style.backgroundColor = '#FFEBCD';
});


//4. `drag / drop`
/*add textbox when dragging element*/
const dragBox = document.querySelector('body');
dragBox.addEventListener('dragstart', event => {
return alert("Hey...where are you going with that?!")
})

//5. `contextmenu`
/*prevent copying*/
const stopIt = document.querySelectorAll('img');
stopIt.forEach(image => image.addEventListener('contextmenu', event => {
    return alert("These aren't the images you're looking for")
}))


//6. `load`
window.addEventListener('load', event => {
    return alert("Welcome!")
})


//7. `mouseup`
const outOfIdeas = document.querySelector('.intro');
outOfIdeas.addEventListener('mouseup', event => {
    return alert("That tickles")
})



//8. `mousedown`
const lastOne = document.querySelector('.footer');
lastOne.addEventListener('mousedown', event => 
{ event.target.style.backgroundColor = '#17A2B8';
});


//9. `click`
/* prevent page from reloading when selecting nav link*/
const navStop = document.querySelectorAll('nav a');
navStop.forEach(link => link.addEventListener('click', event => 
{ event.preventDefault();
}))


//10. `dblclick`
/*hide content when double clicked*/
const goAway = document.querySelector('.content-section');
goAway.addEventListener('dblclick', event => {
    event.target.style.visibility = "hidden"
})