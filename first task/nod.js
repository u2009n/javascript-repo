document.getElementById('show').onclick=function() {
    console.log('hallo Adel');
}

let calc = function(num1,num2){
return num1+num2;
};
console.log(calc(10,10));


function sayHallo(fName,Lname){
    let message='Hallo';
    function co_ncat(){
       message=(`${message} ${fName} ${Lname}`);
    }
    co_ncat();
    return message;
}

console.log(sayHallo('adel','Sami'));

console.log('???????????????????????????????????????????');
function sayHallo(fName,Lname){
    let message='Hallo';
    function co_ncat(){
       return `${message} ${fName} ${Lname}`;
    }
    return co_ncat();
}

console.log(sayHallo('adel','Hussein'));


console.log('???????????????????????????????????????????');
function sayHallo(fName,Lname){
    let message='Hallo';
    function co_ncat(){
        function getFullname(){
            return `${fName} ${Lname}`;
        }
       return `${message} ${getFullname()}`;
    }
    return co_ncat();
}

console.log(sayHallo('adel','Hussein'));

console.log('###########################################');

let print = function () {
    return 10;
}
console.log(print());

console.log('###########################################');

let print1 = (num) => {
    return 10+num;
}
console.log(print1(2));

console.log('###########################################');

let print2 = num =>  10+num;
console.log(print2(5));

console.log('###########################################');

let print3 = (num1,num2) =>  num1+num2;
console.log(print3(5,5));

console.log('###########################################');
console.log('###########################################');
var a=10;
var b=10;



function showtext(){
    var a=20;
    var b=20;
    console.log(` local ${a}  ${b}`);
}
console.log(`Global ${a,b}` );
showtext();

console.log('###########################################');

var x=10;
let y=20;
if(10===10){
let  x=40;
}

console.log(x);

console.log('###########################################');

let names= (i=names.length) => console.log(`String [${i}] => Done!`);

console.log(names(['adel','sami','ali','nedal','hameed']));



console.log('###########################################');

let myNumbers=[20,50,10,60];
let calc1 =(one ,two,...nums) =>  one * two - (nums[0]+nums[1] + one);

console.log(calc1(10,20,50,60));// 80


console.log('##########################++++#################');

let myNums=[1,2,3,4,5];

let newArray=[];

for (let i=0;i < myNums.length;i++){
    newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);


let addSelf = myNums.map(function(elment,index,arr){
 
    
    return elment + elment;
     
},10)

console.log(addSelf);

console.log('################# Filiter ##########################');

let addSelf1=myNums.map(num => num+num);
console.log(addSelf1);

console.log('###########################################');

function addtion(elment){
    return elment+elment;
}

let add=myNums.map(addtion);
console.log(add);


let swappingCase='elZERo';
let invertedNumbers=[-1,3,100,-40,30];
let ignorBooleans='Elze123ro';

let sw=swappingCase.split('').map(function(elm) {
 return elm === elm.toUpperCase() ? elm.toLowerCase(): elm.toUpperCase();
}).join('');
console.log(sw);

let sw1=swappingCase.split('').map((elm) => (elm === elm.toUpperCase() ? elm.toLowerCase(): 
elm.toUpperCase())).join('');
   console.log(sw1);

let inv = invertedNumbers.map(function(ele){
    return -ele;
});
console.log(inv);

let ing=ignorBooleans.split('').map(function(ele){
    return isNaN (parseInt(ele)) ? ele :'';
}).join('');
console.log(ing);

console.log('################# Filiter ##########################');

let arrNumbers=[3,7,12,24,26,50];

let num=arrNumbers.filter(function(el){
    return el % 3 ===0;
});
console.log(num);

let sentences='I love the yemenies  foood';
let smallWord = sentences.split(' ').filter(function(ele){
    return ele.length <= 4;
}).join(' ');
console.log(smallWord);


let ignNumbers='Elz1265ro';

let ign=ignNumbers.split().filter(function(ele){
    return isNaN(parseInt(ele));
}).join();
console.log(ing);

console.log('################# Map and Filiter ##########################');

let mix='AB13sr4o';

let malNumbers = mix.split('').filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function (ele){
    return ele * ele;
});
console.log(malNumbers);

let nums=[10,20,15,30];

let sum=nums.reduce(function(acc,current,index,arr){
    return acc+=current;
},5);
console.log(sum);

console.log('###########################################');

let removChars=['E','L','@','@','Z','E','@','R','@','O'];

let remove=removChars.filter(function(ele){
    return ele !=='@';
}).reduce(function(acc,current){
    return acc+current;
});
console.log(remove);

console.log('######################  ForEach #####################');

let allList=document.querySelectorAll('ul li');
let allDives=document.querySelectorAll('.content div');

    allList.forEach(function(ele){
            ele.onclick=function(ele){
             allList.forEach(function(ele) {
                //  Remove All Class
                 ele.classList.remove('active');
             });   
            //  Add the Active Class
             this.classList.add('active'); 
            //  Hide All Dives
              allDives.forEach(function(ele){
                 ele.style.display = 'none';
            });
          };   
    });

    console.log('######################  Chalang #####################');

    let myString='1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z';
    let zLetter=myString.endsWith('z');
    let sulution=myString.split('').filter(function(ele){
        return isNaN(parseInt(ele))  && ele !==',';
    }).map(function(ele){
        return ele.replace('_',' ');
    }).reduce(function(acc,current){
        return acc===current ? acc :acc+current;
    });
    console.log(sulution);
    console.log(zLetter);



    