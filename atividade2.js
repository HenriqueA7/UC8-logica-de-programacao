//Data evento deve ser posterior à data atual
//variável data MM/DD/YYYY
//get.Month - Janeiro mês 0
let dataEvento = new Date("03/12/2022")
let dia = dataEvento.getDate()
let mes = dataEvento.getMonth()+1
let ano = dataEvento.getFullYear()
let exibirData = dia + "/" + mes + "/" + ano
let dataHoje = new Date ()

if(dataEvento < dataHoje) {
    console.log("A data " + exibirData + " é inválida! Informe outra data")
} else {
    console.log("A data " + exibirData + " é válida! Evento cadastrado")
}

//Idade mínima 18 anos
let idadeParticipante = 18

if (idadeParticipante >= 18 && idadeParticipante < 120) {
    console.log("Idade válida! Participante cadastrado")
} else {
    console.log("Idade inválida! Participante deve ser maior de idade")
}

//Limite de 100 participantes
//Ao invés de usar um número qualquer para a quantidade de participantes usei o Array para praticar.
let quantidadeParticipantes = ["Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane", "Rafael", "Juliane", "Willian", "Caique", "Tatiane"]
if (quantidadeParticipantes.length < 100) {
    console.log("Cadastro realizado com sucesso!")
} else {
    console.log("Limite de participantes atingido. Cadastro não realizado!")
}
