let one = document.querySelector(".one");
let two = document.querySelector('.two');

window.onload = function(){
    two.focus();
};

one.onBlur = function(){
    document.links[0].click();
};