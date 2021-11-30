document.querySelector("button").addEventListener("click", calculateBudget)

let kostnadLista = [];
let inkomstLista = [];
function calculateBudget(e) {
    e.preventDefault();
  
const option= document.querySelector("select");

if(option.value=="+"){    

  const description =  document.querySelector("#desc").value;
  const value = document.querySelector("#num").value;
  inkomstLista.push(value)
 const div= document.querySelector(".inkomst-lista");

 div.innerHTML   += `<li style="list-style-type:none;">${description}     ${value} Kr</li>`
}

if(option.value =="-"){

    const description = document.querySelector("#desc").value;
    const value = document.querySelector("#num").value;
    kostnadLista.push(value)
    const kostnadDiv= document.querySelector(".kostnad-lista");

    kostnadDiv.innerHTML += `<li style="list-style-type:none;">${description}     ${value} Kr<span>X<span></li>`;
    
    /*
    const myLi = document.querySelector('li');
    const mySpan = document.querySelector('span');
    mySpan.innerHTML = 'x';
    myLi.appendchild(mySpan);*/


 }
/*
 const close = document.querySelectorAll('span')*/

var kostnadSumma= 0;
 for( var i= 0; i<kostnadLista.length ; i++){
     kostnadSumma += Number(kostnadLista[i]);
 }
 var inkomstSumma=0;
 for( var i= 0; i<inkomstLista.length; i++)
 { 
     inkomstSumma += Number(inkomstLista[i])
 }
 console.log(inkomstSumma, kostnadSumma)


 const vinstDiv = document.querySelector(".vinst")
 vinstDiv.textContent = inkomstSumma-kostnadSumma

if(option.value=="Välj") 
{
    alert("Halloooj, Du måste välja mellan + eller -")
}
  
}