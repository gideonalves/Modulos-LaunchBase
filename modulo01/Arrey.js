// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.

const alunos  =  //aqui o alunos é uma variavel 
                [    
                    {                      // posição [0]
                        nome:  "Mayk",    //aqui a objeto é nome:
                        nota:    9.8       //aqui o objeto é nota:
                    },
                    {                    
                        nome:  "Diego",  // posição [1]
                        nota:   10
                    },
                    {
                        nome:  "Fulano",   // posição [2]
                        nota:   2
                    }
                ]

const nomesDeAlunos = ["Mayk", "Diego", "Fulano"]      // variavel nomeDeAlunos          
console.log (nomesDeAlunos) // aqui imprime variavel nomeDeAlunos 


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 // aqui fica as posições [0],[1],[2]

//Se a média for maior que 5, parabenizar a turma
if(media > 5){
    console.log(`A nota foi de ${media}. Parabéns`)
}else{
    console.log('A média é maior que 5')
}
 