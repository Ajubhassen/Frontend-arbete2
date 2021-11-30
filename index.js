document.querySelector("button").addEventListener("click", calculateBudget)

let kostnadLista = [];
let budgetLista = [];
function calculateBudget(e) {
    e.preventDefault();
  
const option= document.querySelector("select");

if(option.value=="+"){    

  const beskrivning =  document.querySelector("#beskriv").value;
  const value = document.querySelector("#nummer").value;
  budgetLista.push(value)
 const div= document.querySelector(".budget-lista");

 div.innerHTML   += `<li style="list-style-type:none;">${beskrivning}     ${value} Kr<span>X<span></li>`
}

if(option.value =="-"){

    const beskrivning = document.querySelector("#beskriv").value;
    const value = document.querySelector("#nummer").value;
    kostnadLista.push(value)
    const kostnadDiv= document.querySelector(".kostnad-lista");

    kostnadDiv.innerHTML += `<li style="list-style-type:none;">${beskrivning}     ${value} Kr<span>X<span></li>`;
    
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
 var budgetSumma=0;
 for( var i= 0; i<budgetLista.length; i++)
 { 
     budgetSumma += Number(budgetLista[i])
 }


 const balansDiv = document.querySelector(".balans")
 balansDiv.textContent = budgetSumma-kostnadSumma

if(balansDiv.value < 0)
{
    alert("showred")
}

if(option.value=="Välj") 
{
    alert("Halloooj, Du måste välja mellan + eller -")
}
  
}