// const desconto = 200

// if(desconto ==100){
// console.log("Desconto de 5%")
// }
// else if(desconto >100){
//     console.log('Desconto de 20%')
// }
// else{
//     console.log('Nenhum desconto disponivel')
// }

const nome = ["Eduardo","Maria","Fernado","João","Francisco"]
    for (let indice = 0; indice < nome.length; indice++) {
        console.log("Numero da exercucao: " , indice + 1)
        console.log("Nome da vez:" + nome  [indice])
    }

const nomes = ["Eduardo","Maria","Fernado","João","Francisco"]
 nomes.forEach((nome, indice)=> {
    console.log('Execução: ' , indice + 1)
    console.log('Nome da vez ' + nome)
    console.log('-------------')
 });