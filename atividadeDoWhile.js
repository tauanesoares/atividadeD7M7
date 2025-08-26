/* Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado.
 Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. */

const rs = require('readline-sync');

let qtdnumpositivos = 0
let numero

do{
    numero = rs.questionInt('Digite um numero: ')
    if (numero > 0){
        qtdnumpositivos++
    }
}while (numero != 0)

console.log('A soma dos numeros positivos é: '+ qtdnumpositivos)