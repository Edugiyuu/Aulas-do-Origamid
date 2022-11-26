//window.alert ("Isso mesmo")

const href = window.location.href;

console.log(href)

if (href === ''){
    console.log('É igual')
}

const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList

function teste() {
    console.log('Clicou em' , h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1)