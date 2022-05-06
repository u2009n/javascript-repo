 
 
//  Task01
 
 console.log(document.getElementsByTagName('div'));
 console.log(document.getElementById('elzero'));
 console.log(document.getElementsByClassName('element'));
 console.log(document.body);
 console.log(document.querySelector('.element'));
 console.log(document.querySelector('div'));
 console.log(document.querySelector('#elzero'));
 console.log(document.querySelector("[name='js']"));
 console.log(document.querySelectorAll('.element'));
 console.log(document.querySelectorAll('div'));
 console.log(document.querySelectorAll('#elzero'));
 console.log(document.querySelectorAll("[name='js']"));

 console.log('------------------------------------------------');

// Task02
 
// for (let i = 0; i <= 10; i++){
//     document.images[i].src='https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
//     document.images[i].alt='Elzero Logo';
// }


let usDollar = document.querySelector("[name='dollar']");

  document.forms[0].oninput = function(e){
  document.querySelector('div').innerHTML= (`{${usDollar.value}} USD Dollar =
   ({${(usDollar.value * 15.6).toFixed(2)}}) Egyptian Pound}`);
}

// document.querySelector('.one').title=document.querySelector('.two').title;
// document.querySelector('.two').title=document.querySelector('.two').title;


// for(let i=0; i<= 5;i++){
//     if(document.images[i].hasAttribute('alt')){
//         document.images[i].setAttribute('alt','Old');
//     }else{
//         document.images[i].setAttribute('alt','Elzero new');


//     }
// }

let taskNumber = document.querySelector("[name='elements']");
let tasktext = document.querySelector("[name='texts']");
let taskType = document.querySelector("[name='type']");


let form = document.querySelectorAll('form')

form[1].onsubmit = function(e){
    
    let allDives = document.querySelector('div');
        allDives.remove();
   

    for(let i =0; i < taskNumber.value;i++){
      
            let myText=document.createTextNode(tasktext.value);
            let myElment = document.createElement(taskType.value);
                myElment.appendChild(myText);
                mainElment=document.querySelector('.results');
                mainElment.appendChild(myElment);
                    myElment.className='box';
                    myElment.title='ELment';
                    myElment.setAttribute('id','id-'+i)
                    document.body.appendChild(mainElment);
                   
    } 
    e.preventDefault();
}   
