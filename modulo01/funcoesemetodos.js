// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.

const alunosDaTumaA =  //aqui o alunos da Turam A é uma variavel 
    [
        {
            nome: "Mayk",
            nota: 9.8
        },
        {
            nome: "Diego",
            nota: 10
        },
        {
            nome: "Fulano",
            nota: 2
        }
    ]

//=======================================================================================

const alunosDaTumaB =  //aqui o alunos da Turam B é uma variavel 
    [
        {
            nome: "Cleiton",
            nota: 10
        },
        {
            nome: "Robson",
            nota: 10
        },
        {
            nome: "Siclano",
            nota: 0
        }
    ]

function calculaMedia(alunos) {    // function calculaMedia(alunos) esses "alunos" é que esta dentro do "return"
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTumaA) // esse CalculaMedia são as const alunosDaTurmaA  ======= aqui recebe os valores da funcion calculaMedia
const media2 = calculaMedia(alunosDaTumaB) // esse CalculaMedia são as const alunosDaTurmaB


function enviaMensagem(media, turma) {

    // Se a média for maior que 5, parabenizar a turma    
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma}é menor que 5`)
    }

}

enviaMensagem(media1, 'turmaA') //meida1 chamamos de parametros
enviaMensagem(media2, 'turmaB') //meida2 chamamos de parametros

// Marcar aluno como reprovado se a nota
// for menor que 5.
// e, também, enviar uma mesagem