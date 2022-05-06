
// Header

let mainHeader = document.createElement('header');
let mainLogo = document.createElement('span');
let mainLogoText =document.createTextNode('Elzero');
let mainUl= document.createElement('ul');
let mainLitext = ['Home','About','Service','Contact'];

    mainHeader.className = 'website-hand';
    mainUl.className ='menu';
    let menuCls = document.getElementsByClassName('menu');
   


    mainLogo.appendChild(mainLogoText);
    
    for(let i =0;i < mainLitext.length;i++){
        var mainLi = document.createElement('li');
            mainUl.appendChild(mainLi);
            mainLi.innerHTML = mainLitext[i];
            mainLi.style.cssText="display:inline-block ;padding-left:23px";
    }
  
    mainHeader.appendChild(mainLogo);
    mainHeader.appendChild(mainUl);
    document.body.appendChild(mainHeader);

    // Style Header
    mainLogo.style.cssText ="font-size:20px ; font-weight:900 ;color:green";
    mainHeader.style.cssText ="display:flex ;justify-content: space-between ;margin:10px ";
    mainUl.style.cssText="list-style: none ;  display: block;  text-align: right";
    


    // Main Div Container

    let mainContainer = document.createElement('div');
        mainContainer.className = 'container';

    for(let i = 1; i <= 15 ;i++){
      
        let product = document.createElement('div');
        let sp =document.createElement('span');
            product.className = 'product';
           
           
           

        let num = document.createTextNode(i);
            sp.appendChild(num);
            sp.after('product');
            product.append(sp);
            product.append('product');
            mainContainer.append(product);
            document.body.appendChild(mainContainer);
           
         
            sp.style.cssText = "border-radius:5px;display:block;font-size:40px;font-weight:normal; margin-bottom:5px;margin-top:5px;text-align: center";
            product.style.cssText=" padding-bottom:10px;background-color:#fff;margin-top:.5%; flex-basis: 33%; text-align: center;";

    }
    


    // Style Containe

    mainContainer.style.cssText ="padding:0 0.5% 0.5% 0.5%;background-color:gray ;opacity:.6 ; display:flex ; flex-wrap: wrap;justify-content:space-between";


    // Footer

    let mainFooter = document.createElement('footer');
    let txtFoteer = document.createTextNode('Copyright 2021');

    mainFooter.append(txtFoteer);
    document.body.append(mainFooter);


    // Style footer

    mainFooter.style.cssText = "padding-top:31px;padding-bottom:31px;font-weight:bold;text-align:center;background-color:green"




