/*  const numerosDasCasas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
 */

//--------------------------------------------------------------------------------------


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

//------------------------------------------------------------------------------------

/*    const array2 = ["Ola" ,"Eu" ,"sou" ,"o" ,"Edu"]
  var palavras = ''

  function smash (words) {
    for(let index = 0; index < words.length; index++){
      palavras += `${words[index]} `;
    }
    return palavras 
}
//(Nota: O replace não funciona)

console.log(smash(["Ola" ,"Eu" ,"sou" ,"o" ,"Edu"]));  */ 

//---------------------------------------------------------------------------------------

/* function grow(array){
    var Multiplicador = 1
    for (let i = 0; i < array.length; i++) {
        Multiplicador *= array[i];
    }
    return Multiplicador;
  };

  console.log(grow([5,5,6])); */

  //--------------------------------------------------------------------------------------
    
/*   function duckDuckGoose(players, goose) {
    const Player ={
        name:''
    }

    for(let index = 0; index < players.length; index++){
        return Player.name + players[goose]
    }
  } 
  */
 
/*   function duckDuckGoose(players, goose) {
    for(let index = 0; index < players.length; index++){
      var nome = players[goose]
      return 'nome: '+ nome
    }
  } */

  //console.log(duckDuckGoose(['A','B','C','D'],2));

  //-------------------------------------------------------------------------------------
  

/*    function warnTheSheep(queue) {

    for(let i = 0 ; i < queue.length; i++){

      if(queue.length -1 === 'wolf'){
        return ("Pls go away and stop eating my sheep" );
      }else{
        return (`Oi! Sheep number ${i}! You are about to be eate+n by a wolf!`);
      }
    }
  }

  console.log(warnTheSheep(["sheep", 'sheep',"wolf"]));  */

  //------------------------------------------------------------------------------------


/*   function monkeyCount(n) {

    const novoNum = []
    for(let i = 0; i <= n;i++){
      novoNum.push(i)
    }
    return novoNum
  }

  console.log(monkeyCount(5)); */

  //----------------------------------------------------------------------------------

  //funcionou meio estranho

/*     function well(x){
    let contadorDeGood = 0

    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good') {
        console.log(contadorDeGood += 1 ); 
      }
    }

    if(contadorDeGood === 0){
      return 'Fail!'
    }else if (contadorDeGood <= 2){
      return 'Publish!'
    }else if (contadorDeGood ) {
      return 'I smell a series!'
    }
  }
 console.log(well(["bad","good","bad","bad","good","good"]));   */

//--------------------------------------------------------------------------------

/*  function fakeBin(x){

  let totalbinario = ''

  for (let i = 0; i < x.length;i++){
   if (x[i] < 5) {
    totalbinario += '0'
   }else{
    totalbinario += '1'
   }
  }
  return totalbinario
} 

console.log(fakeBin('165409'));
 */

/* const nome ='Eduardo'

  for(let i = 0; i < nome.length;i++){
    console.log(nome[i],i);
  }  */

  //-------------------------------------------------------------------------
 
   function likeOrDislike(buttons) {

    let valorAtual = 'Nothing'
  
    for(let i = 0; i < buttons.length; i++){
      if (buttons[i] === valorAtual) {
        valorAtual = 'Nothing'
      }else{
        valorAtual = buttons[i]
      }
    }
    return valorAtual
  }

  console.log(likeOrDislike(['Like','Dislike','Dislike','Like'])); 

  //------------------------------------------------------------------------
// funcionou no codewars mas não funcionou
/*   function countSheeps(arrayOfSheep) {
  let contador = 0
  
  for (let i = 0;i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true) {
      contador += 1
    }
  }
  return contador
}

console.log(countSheeps[true,false,true,true,false,true]);
 */

/* const trues = [true,false,true,false,false,true]
let contador2 = 0

for (let i = 0; i < trues.length; i++) {
  if (trues[i]===true) {
    contador2 +=1
  }
}

console.log(contador2); */