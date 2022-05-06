

// let myElment=document.createElement('div');
// let myAttr=document.createAttribute('data_castoum');
// let myText=document.createTextNode('Product Items')
// let myComment=document.createComment('This is Div')

// // Direct Attrbute
//    myElment.className='Product';

// // Create new Attrbute using Set
//    myElment.setAttribute('data_test','testing');

// // Creat Attrbute using varible
//     myElment.setAttributeNode(myAttr);

// // Append Text to Elment
//  myElment.appendChild(myText);

// document.body.appendChild(myElment);
// //  Append Comment to Elment

// myElment.appendChild(myComment);


// console.log(myElment);

for(let i=0; i <= 100 ;i++) {
        let myMainElement=document.createElement('div');
        let myheading=document.createElement('h3');
        let myPragraph=document.createElement('p');

        let myheadingtext=document.createTextNode(`Product Title : ${i}`);
        let myPragraphText=document.createTextNode('Product Descrption')

             myMainElement.className='Product';
            //  Add Headin  text
                myheading.appendChild(myheadingtext);
            // Add Headin to Main Elment
                myMainElement.appendChild(myheading);

            // Add prgraph text
                myPragraph.appendChild(myPragraphText);
            //  Add prgraph to Main Elment
            myMainElement.appendChild(myPragraph);
            document.body.appendChild(myMainElement);
    }
    

