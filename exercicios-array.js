
/* 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
    Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
    EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero) */
    
    function encontraMaior(array){
        return Math.max(...array);  // sintaxe spread é um modo curto de se escrever a solução com apply para retornar o maior valor de um array.
    }
    
    console.log(encontraMaior([56,12,168,66])); 


/* 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e 
      o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
Exemplo, recebendo [5, 37, 18, 59, 12, -5, ] a função deve retornar "o maior número é 59 e o menor número é -5" */

Array.min = function(array) {
    return Math.min.apply(Math, array);
}

Array.max = function(array) {
    return Math.max.apply(Math, array);
}

var random = [5, 37, 18, 59, 12, -5];  
console.log( `O menor número é: ${Array.min(random)} e o maior número é: ${Array.max(random)}` );
