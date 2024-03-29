const faker = require("faker");
const { hash } = require("bcryptjs");

const User = require('./src/app/models/User'); // cria os usuário no banco de dados
const Product = require('./src/app/models/Product')  // cria os produtos no banco de dados
const File = require('./src/app/models/File')  // cria os files no banco de dados

let userIds = []
let totalProducts = 10
let totalUsers = 3

// Cria os Usuários
async function createUsers() {
    const users = [];
    const password = await hash("1111", 8);

    while (users.length < 3) {
        users.push({
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password,
          cpf_cnpj: faker.datatype.number(999999),
          cep: faker.datatype.number(999999),
          address: faker.address.streetName(),
        });
      }
  
      const usersPromise = users.map(user => User.create(user));

      usersIds = await Promise.all(usersPromise);   
}    

// Cria os Produtos
async function createProducts() {

    let products = []

    while(products.length <  totalProducts) {
        products.push({
            category_id: Math.ceil(Math.random() * 3),
            user_id: usersIds[Math.floor(Math.random()* totalUsers)],
            name: faker.name.title(),
            description: faker.lorem.paragraph(Math.ceil(Math.random() * 10)),
            old_price: faker.datatype.number(99999),
            price: faker.datatype.number(99999),
            quantity: faker.datatype.number(99999),
            status: Math.round(Math.random())
        })
      
    }

    const productsPromise = products.map(product => Product.create(product))
    productsIds =  await Promise.all(productsPromise)

    
    let files = []

    while(files.length < 50) {
      files.push({
      name: faker.image.image(),
      path: `public/images/placeholder.png`,
      product_id: productsIds[Math.floor(Math.random() * totalProducts)]
    })
  }

    const filesPromise = files.map(file => File.create(file))

    await Promise.all(filesPromise)


}

async function init() {
  await createUsers()
  await createProducts()
}

init()