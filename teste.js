 const numerosDasCasas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(numerosDasCasas[2]);

var valorTotal = 0
for (let index = 0 ; index < numerosDasCasas.length; index++) {
    if(numerosDasCasas[index]% 2 == 1){
        valorTotal += numerosDasCasas[index]
    }

}
console.log(valorTotal);

if(5 % 2 == 1){

}


 var valorTotal2 = 0
 numerosDasCasas.forEach((value)=>{
    valorTotal2 += value
    
}) 
console.log(valorTotal2);

//-------------------------------------------------------------

/* const array1 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]


for (let index = 0; index < array1.length; index++) {
    if (array1[index] === "needle") {
        console.log(`found the needle at position ${[index]}`);
    }
    
    console.log('ola',index);
}



function findNeedle(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === "needle") {
            console.log(`found the needle at position ${[index]}`);
        }
    }
  }

  console.log(findNeedle["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]); */

//----------------------------------------------------------------------

/*   const array2 = ["Ola" ,"Eu" ,"sou" ,"o" ,"Edu"]
  const palavras = ''

  function smash (words) {
    for(let index = 0; index < words.length; index++){
      return (words + palavras);
    }
}
(Nota: O replace não funciona nos words)

console.log(smash(["Ola" ,"Eu" ,"sou" ,"o" ,"Edu"]));  */

//--------------------------------------------------------------------------

/* function grow(array){
    var Multiplicador = 1
    for (let i = 0; i < array.length; i++) {
        Multiplicador *= array[i];
    }
    return Multiplicador;
  };

  console.log(grow([5,5,6])); */
  