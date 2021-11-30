document.querySelector("button").addEventListener("click", budgetApp)

let kostnadLista = [];
let budgetLista = [];
function budgetApp(e) {
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
    

 }
 
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


}