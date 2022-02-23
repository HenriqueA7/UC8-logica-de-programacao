//Requisitos do MVP
//Percorrer do zero até o número de alunos e retornar os seguintes resultados:
//1º - Se o número for par, escreva "par" e o número correspondente
//2º - Se o número for ímpar, escreva "ímpar" e o número correspondente
//3º - Se o úmero for zero, escreva "zero"

let numeroDeAlunos = ["Aluno", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno", "Aluno"]

if (numeroDeAlunos.length == 0) {
    console.log("O número de alunos é zero")
} else {
    if (numeroDeAlunos.length%2!=0) {
            console.log("O número de alunos é ímpar: " + numeroDeAlunos.length)
    } else {
        console.log("O número de alunos é par: " + numeroDeAlunos.length)
    }
}
