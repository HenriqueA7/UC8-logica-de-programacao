//Atividade do encontro remoto 1
//A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar a programação de um sistema de cadastro de peças, que deverá atender os seguintes requisitos:
//1º Se a peça possuir um peso maior que 100 gramas, pode cadastrar.
//2º Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
//3º Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

var listaDePecas = ["Amortecedor", "Motor", "Filtro do ar", "ar"] //vetor ou array

//peso mínimo 100g
let peso = 200
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça tem o peso adequado")
}

//caixa suporta 10 itens.
//Vetor começa com quantidade zero
if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}

//Qntd de caracteres mínimo 3
for (indice = 0; indice < listaDePecas.length; indice++) {
    let nomePeca = listaDePecas[indice]
    if (nomePeca.length < 3)
    console.log("A peça " + listaDePecas[indice] + " possui menos que 3 caractéres, não é possível adicioná-la")
}
