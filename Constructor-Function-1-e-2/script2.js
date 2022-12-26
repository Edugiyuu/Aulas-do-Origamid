/* const Dom ={
    seletor: 'li',
    element(){
        const elementoSelecionado = document.querySelector(this.seletor)
       
    },
    ativar(){
        this.element().classList.add('ativar')
    }
} */

function Dom() {
    this.seletor = seletor
    this.element= function(){
        return document.querySelector(this.seletor);
    },
    ativar(){
        this.element().classList.add('ativar');
    }
}

Dom.ativar();

Dom.seletor = 'ul'
Dom.ativar