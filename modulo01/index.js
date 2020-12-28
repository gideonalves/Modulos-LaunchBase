// Criar um program que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.


const aluno1 = 'Mayk'
const notaAluno1 = 9.8

const aluno2 = 'diego'
const notaAluno2 = 10

const aluno3 = 'fulana'
const notaAluno3 = 2


const media = (notaAluno1 + notaAluno2 + notaAluno3) /3

//Se a média for maior que 5, parabenizar a turma
if(media > 5){
    console.log(`A nota foi de ${media}. Parabéns`)
}else{
    console.log('A média é maior que 5')
}
 