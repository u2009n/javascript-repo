let myElment=document.querySelector('.js');
console.log(document.querySelector('.js').innerHTML);
console.log(myElment.textContent);

myElment.innerHTML='text from <span>main.js</span> FILE';
myElment.textContent='text from <span>main.js</span> FILE';

document.images[0].src='http://www.google.com';
document.images[0].alt='alternativ';
document.images[0].id='pic1';
document.images[0].className='imgs';

let myLink=document.querySelector('.link');

console.log(myLink.getAttribute('class'));
console.log(myLink.getAttribute('href'));
myLink.setAttribute('href','http://www.twitter.com');
myLink.setAttribute('title','test');
console.log(myLink.attributes);
console.log(document.querySelectorAll('p')[0].attributes);
let myP = document.getElementsByTagName('p')[0];

if(myP.hasAttribute('data_src')){
    if(myP.getAttribute('data_src')===''){
       myP.removeAttribute('data_src');
    }else {
        myP.setAttribute('data_src','new value');
    } 
}else{
    console.log('not found');
}

console.log('################################');

if(myP.hasAttributes()){
    console.log('has attrbutes');
}else {
    console.log('has not attrbutes');
}

console.log('################################');

if(document.getElementsByTagName('div')[1].hasAttributes()){

     console.log('Div has attrbutes');
}else {
    console.log('Div has not attrbutes');
}

console.log('++++++++++++++++++++++++++++++++++');

let objectelemnt=document.querySelectorAll('div');
console.log(objectelemnt[1]);
 console.log(objectelemnt[1].children);
 console.log(objectelemnt[1].childNodes);
 console.log(objectelemnt[1].childNodes[3]);
 console.log(objectelemnt[1].children[0]);
 console.log(objectelemnt[1].firstChild);
 console.log(objectelemnt[1].lastChild);
 console.log(objectelemnt[1].firstElementChild);
 console.log(objectelemnt[1].lastElementChild);


 console.log('++++++++++++++++++++++++++++++++++');

 let mybtn=document.getElementById('btn');
 mybtn.onload=function(){
     console.log('click');
 }

  let userInput = document.querySelector("[name='username']");
  let ageInput=document.querySelector("[name='age']");
    
        document.forms[0].onsubmit = function(e) {

            let uservalid = false;

        if(userInput.value !=='' && userInput.value.length <= 10 && ageInput.value !==''){
            uservalid=true;
        }
        if(uservalid ===false){
            e.preventDefault();
        }

     }





    let one = document.querySelector(".one");
    let two = document.querySelector(".two");

    window.onload = function () {
    two.focus();
   
    };

    // one.onblur = function () {
    // document.links[0].click();
    // };

    let element = document.getElementById("my-div");

    console.log(element.classList);
    console.log(typeof element.classList);
    console.log(element.classList.contains("osama"));
    console.log(element.classList.contains("show"));
    console.log(element.classList.item("3"));

    element.onclick = function () {
    element.classList.toggle("show");
    };