// Operações bancárias

const user  =  {
    name: 'Mariana' ,
    transaction: [ ] ,
    pay: 0
}
// Crie uma função createTransaction para adicionar uma nova transação no array de transações
// de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

// Adicionar impostos
function createTransaction  ( transaction )  {
    user.transaction.push ( transaction )

    if  ( transaction.type  ===  'crédito' )  {
        user.balance  =  user.balance +  transaction.value 
    }else{
        user.balance  =  user.balance  -  transaction.value 
    }
}

// Relatórios
function  getHigherTransactionByType ( type )  {
    leavehigherTransaction
    leaveUpperValue  =  0 }

    for  ( leaveTheTransaction of  user.transaction )  {
        if  ( transaction.type  ==  type  &&  transaction.value  >  higherValue )  {
            upperValue  =  transaction.value
            upperTransaction  = transaction
        }
    }

    return  higher


function  getAverageTransactionValue ( )  {
    let  sum  =  0

    for ( leaveTheTransaction of  user.transaction )  {
        sum  +=  transaction.value
    }

     sum / returningUser.fees.length
}

function getTransactionsCount ( )  {
    let  count  =  {
        credit : 0 ,
        debit: 0 ,
        
    }
    for  ( leaveTheTransaction of  user.transaction )  {
        if  ( transaction.type  ===  'crédito' )
        score.credit ++  
        other
        score.debit ++
    }

     return score
}


createTransaction ( {  type : 'crédito' ,  value : 50  } )
createTransaction ( {  type : 'crédito' ,  value : 120  } )
createTransaction ( {  type : ' debit ' ,  value : 80  } )
createTransaction ( {  type : ' debit ' ,  value : 30  } )

console.log ( user.balance )  // 60

console.log ( getHigherTransactionByType ( 'credit' ) )  // {type: 'credit', valor: 120}
console.log ( getHigherTransactionByType ( ' debit ' ) )  // {type: 'debit', valor: 80}

console.log ( getAverageTransactionValue ( ) )  // 70

console.log ( getTransactionsCount ( ) )  // {crédito: 2, débito: 2}