// 1.
//a.
//10
//50

//b. nada

// 2.
/* a. se incluir cenoura no texto, ele irá dizer se tem ou não, 
sendo true ou false */

// b.
// I. true
// II. true
// III. false

// B1.

// a.
/* function info(){
    console.log("Eu sou Gabriel, tenho 19 anos, moro em São Leopoldo e sou estudante.");
}
console.log(info());
 */

// b.
/* function info(name, age, address, profession){
    return(`Eu sou ${name}, tenho ${age} anos, moro em ${address} e sou ${profession}.`)
}
name = prompt("Seu nome")
age = Number(prompt("Sua idade"))
address = prompt("Seu indereço")
profession = prompt("Sua profissão")
console.log(info(name,age,address, profession));
 */

// 2.
// a.
/* 
function calcular(n1, n2){
    return Number(n1)+Number(n2);
}
const soma = calcular(n1 = Number(prompt("primeiro nº")), 
n2 = Number(prompt("segundo nº")));
console.log("O resultado da soma é: " + soma);
  */

// b.
/* 
function diferença(n1, n2){
    return Number(n1) >= Number(n2);
}
let verificação = diferença(n1 = Number(prompt("primeiro nº")), 
n2 = Number(prompt("segundo nº")));
console.log("O primeiro número é maior ou igual ao segundo?", verificação);
  */

// c.
/* 
function parOuN(npar){
    return (Number(npar) % 2 === 0);
}
let npar = prompt("escolha um n°");
console.log("O número é par?", parOuN(npar));
 */

// d.
/* function tamanhoEMaiusculas(a){
    return (a.length + " " + a.toUpperCase());
}
let a = "aasdasd"
console.log(tamanhoEMaiusculas(a));
 */

// 3.
function operação(n1, n2){
    // n1 = Number(30);
    // n2 = Number(3);
    return console.log("Números inseridos:", n1, "e", n2,
        "Soma:", n1 + n2,
        "Diferença:", n1 - n2,
        "Multiplicação:", n1 * n2,
        "Divisão:", n1 / n2 );

}
// console.log(operação());
let numeros = operação(n1 = Number(prompt("n1")), n2 = Number(prompt("n2")));
console.log(numeros);
