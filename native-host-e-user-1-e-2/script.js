// Liste 5 objetos nativos
Object
Number
String
Function
Array

// Liste 5 objetos do browser
Window
Document
HTMLAllCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== 'undefined') {
    console.log('Existe');
} else {
    console.log('Não existe');
}