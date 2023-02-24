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

    for(let index = 0; index < players.length; index++){
        if (goose === 1) {
          
        }
      return players[goose].name
    }
  } */
  
 
/*   function duckDuckGoose(players, goose) {
    for(let index = 0; index < players.length; index++){
      var nome = players[goose]
      return 'nome: '+ nome
    }
  } */

  //console.log(duckDuckGoose(['A','B','C','D'],1));
  //console.assert(duckDuckGoose(['A','B','C','D'],1),"A")

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

/*      function well(x){
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
 console.log(well(["bad","good","bad","bad","good","good"]));    */

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
 
/*    function likeOrDislike(buttons) {

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

  console.log(likeOrDislike(['Like','Dislike','Dislike','Like']));  */

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


//const alunos = [{name:"a"}, {name:"b"}, {name:"c"}, {name:"d"}, {name:"e"}, {name:"f"}, {name:"g"}]

/* for (let i = 0; i < alunos.length;i++){
  console.log(alunos[i]);
} */

/* alunos.forEach(aluno => {
  console.log(aluno);
}); */

/* var contadorDeAlunos = 0

while (contadorDeAlunos < alunos.length){
  console.log(alunos[contadorDeAlunos]);
  contadorDeAlunos++
} */

/* for (let i = 0; i < alunos.length;i++){
  console.log(alunos[i].name);
} */

/* alunos.forEach(aluno => {
  console.log(aluno.name);
});  */

//var contadorDeAlunos = 0

/* while (contadorDeAlunos < alunos.length){
  console.log(alunos[contadorDeAlunos].name);
  contadorDeAlunos++
} */

/* for (let i = 0; i < 2;i++){
  console.log(alunos[i].name);
} */


/*   function printarNome (arrayDeAlunos,selecionado) {
    return arrayDeAlunos[selecionado -1].name
} */

/* function printarNome (arrayDeAlunos,selecionado) {
  return arrayDeAlunos.length - selecionado
} */

/* function printarNome(arrayDeAlunos,selecionado) {
   const x = arrayDeAlunos.length - selecionado
   return arrayDeAlunos[x -1].name
} */

/*  function printarNome(arrayDeAlunos,selecionado) {
  return arrayDeAlunos[arrayDeAlunos.length - selecionado ].name
} 

console.log(printarNome(alunos,4)); */

/* function alunosPares(arrayDeAlunos) {
  for (let i = 0; i < arrayDeAlunos.length;i++){
    if (i % 2 == 0) {
      console.log(arrayDeAlunos[i].name); 
    }
  }
} */

/* function alunosPares(arrayDeAlunos) {
  for (let i = 0; i < arrayDeAlunos.length;i++){
    if (i % 2 !== 0) {
      console.log(arrayDeAlunos[i].name); 
    }
  }
}

console.log(alunosPares(alunos)); */

/* function simOuNao(arrayDeAlunos,selecionado) {
  for (let i = 0; i < selecionado;i++){
    if (i % 2 == 0) {
      console.log(`Sim ${arrayDeAlunos[i].name}`); 
    }else{
      console.log(`Não ${arrayDeAlunos[i].name}`);
    }
  }
}

console.log(simOuNao(alunos,5)); */

/*  function MenorOuMaior(arrayDeAlunos,numero) {

    if(arrayDeAlunos.length > numero){
      return `É menor do que o tamanho total de alunos ${arrayDeAlunos.length}`; 
    }else if (arrayDeAlunos.length < numero){
      return `Maior que o tamanho total de alunos ${arrayDeAlunos.length}`; 
    }else{
      return `Igual ao numero de alunos ${arrayDeAlunos.length}`
    }
  
}

console.log(MenorOuMaior(alunos,4));  */

/*  function MenorOuMaior(arrayDeAlunos,numero) {

    for (let i = 0; i < arrayDeAlunos.length;i++){
      console.log( `${arrayDeAlunos[i].name} ${i + numero}`);
    }
  }

  console.log(MenorOuMaior(alunos,5));   */

/*   class Player {
    constructor(name) {
        this.name = name;
    }
}
  let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
  let alunos = ex_names.map((n) => new Player(n)); */

  const alunos = [{name:"a"}, {name:"b"}, {name:"c"}, {name:"d"}, {name:"e"}, {name:"f"}, {name:"g"}]

  function duckDuckGoose(players, goose) {
    while (players.length < goose) {
      goose = goose - players.length
  }
  return players[goose -1].name
    
  }

  console.log(duckDuckGoose(alunos,10)); 

