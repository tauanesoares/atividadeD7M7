/* Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares
 e quantos número são ímpares */

const rs = require('readline-sync');

let pares = 0
let impares = 0



//processamento (usar laço de repetição for e if), ler 10 numeros inteiros e verificar se ';e par ou impar
for(let i = 1; i <= 10; i++){
    let numero = rs.questionInt('Digite o ' + i + ' numero: ')

    if (numero % 2 === 0){
        pares++
    }else{
        impares++
    }
}


//saida
console.log('Quantidade de números pares: ' + pares)
console.log('Quantidade de números ímpares: ' + impares)