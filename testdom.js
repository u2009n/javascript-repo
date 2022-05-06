//Event

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let element= document.getElementById('my_div');

window.onload = function(){
    two.focus();
};

one.onblur = function(){

    document.links[0].click();
}



//Classeslist

console.log(typeof element);
console.log(element.classList);
console.log(element.classList.contains('adel'));
console.log(element.classList.contains('test'));
console.log(element.classList.item(1));
console.log(element.classList.length);

element.onclick = function(){
    element.classList.remove('one');
    element.classList.add('add_one','add_two');
    element.classList.toggle('adel');
}




//proprties

  element.style.color='green';
  element.style.fontWeight='bold';
  element.style.fontWeight='bold';
  element.style.cssText = "opacity :.7; margin:30px aut ; color:red"; 
  element.style.removeProperty('color');
  element.style.setProperty('font-size','60px','important');

  document.styleSheets[0].rules[0].style.removeProperty('line-height');
  document.styleSheets[0].rules[0].style.setProperty('background-color','#cfcfcf');


let btn = document.getElementById('clik');
let txt=document.getElementById('change');


    btn.onclick = function() {
        txt.innerHTML='hallo sami';
}


let myElment = document.getElementById('my_div1');
let pragraph = document.createElement('p');
let textPrg = document.createTextNode('Bay from js');
     
// myElment.before('Halleo from js');
// myElment.after('Bay from js');



    pragraph.appendChild(textPrg);
    // myElment.appendChild(pragraph);
    // document.appendChild(myElment);


    myElment.append(pragraph);

    // myElment.append(' From JS');
    // myElment.prepend(' Hallo'  + '  ');

    myElment.remove();



    let span = document.querySelector('.div_one');
    // console.log(Span.previousElementSibling.remove());
    console.log(span.parentElement);

    span.onclick = function() {
        // span.parentElement.style.opacity ='0';
      let parag = document.createElement('p');
       span.parentElement.append(parag);
        // span.parentElement.remove();
    }



    let myP = document.querySelector('#my-p').cloneNode(true);
    let myD = document.querySelector('.my-d');

    myP.id = `${myP.id}-clone`;

    // myD.appendChild(myP);

    function frist(){
        console.log('hallo 1');
    }

    function second(){
        console.log('hallo 2');
    }
    let spOne = document.querySelector('#one');

    spOne.addEventListener("click",function(){
        console.log('hallo');
    });

    spOne.addEventListener('click',frist);
    spOne.addEventListener('click',second);


      myD.onclick = function(){

        let newDiv = myD.cloneNode(true);
        newDiv.className ='clone';
        document.body.appendChild(newDiv);
   }

   document.addEventListener('click', function(e) {
      if (e.target.className === "clone") {
          console.log('iam cloned Div');
       }
   });