var button = document.querySelector('.btn');
var Body = document.querySelector('body');

/* button.addEventListener('click',randomBg)  */

button.onclick = function () {
    Body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                                //'#'+Math.floor(Math.random().toString(16).slice(2,8))
}