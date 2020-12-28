/*=====================================================

        OPERADORES DE COMPARAÇÃO


        >       Maior
        <       Menor
        >=      Maior igual a
        <=      Menor igual a
        ==      Igual a
        ===     Igual e do mesmo tipo
        !=      Diferente de 
        !===    Diferente, inclusive do tipo

=====================================================*/


//DESAFIO
const idade = 18
//Verificar se a pessoa é maior igual 18  anos
// se sim, deixar entrar, se não, bloquera a entrada
if(idade >= 18){
    console.log('Deixar entra')
}else{
    console.log('Bloquear a entrada')
}
//se a pessa tiver 17 anos
// avisar para voltar quando fizer 18 naos
if(idade === 17){
    console.log('Volte quando tiver 18')
}


console.log (5 > 4 )// True
console.log (4 < 4)// false
console.log ( 5 >= 4)// true
console.log ( 4 <= 4)//true

console.log ( 4 == "4") //  Verdadeiro 4 é number e outro Streng
console.log ( 4 === "4") // False porque 4 numbre e outro streng
console.log ( 4 != "5" ) // Verdadeiro
console.log ( 4 != "5" ) // Verdadeiro

