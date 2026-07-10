const cidades = ["São Paulo","Rio de Janeiro","Florianópolis","Recife"]
 cidades.forEach((cidade, indice)=> {
    console.log('Execução: ' , indice + 1)
    console.log('cidade da vez: ' + cidade)
        if (cidade == "Rio de Janeiro"){
            console.log("Encontrado!")
        }
        else {
            console.log("Não encontrado")
        }
    console.log('-------------')
 });