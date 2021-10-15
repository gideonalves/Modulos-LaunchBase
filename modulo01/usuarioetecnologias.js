/*======================================================================

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias 
(novo array), por exemplo:
======================================================================*/
const usuarios = [
  { nome: "Carlos", tecnologias:  ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias:   ["HTML", "Node.js"] }
];


const userFilter =[]
for ( usuario of usuarios){
  for (tecnologia of usuario.tecnologias ) {
    if(tecnologia == 'CSS'){
      console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
    }
  }
}

// console.log(userFilter);

// for ( usuario of usuarios){
//   console.log(`${usuario} trabalha com ${usuario.tecnologias.join(", ")}`)
// }

// console.log(usuarios);

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js

// todo array [] recebe funções e propriedades nativas, eu posso usar a propriedade
// length para saber quantos elementos eu tenho no meu array
// [].length

