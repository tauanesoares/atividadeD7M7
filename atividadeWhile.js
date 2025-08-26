/* Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas
 cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser
  finalizada ao digitar uma idade negativa. */

const rs = require('readline-sync');


let idademenorque21 = 0
let idademaiorque50 = 0


while (true){

    let idade = rs.questionInt('Digite uma idade: ')
    if(idade < 1){
        break
    }
    if (idade < 21){
        idademenorque21++
    }else if(idade > 50){
        idademaiorque50++
    }
    
}

console.log('Total de pessoas menores de 21 anos: ' + idademenorque21)
console.log('Total de pessoas maiores de 50 anos: ' + idademaiorque50)