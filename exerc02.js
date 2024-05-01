function numeroMaior(){
    const numerosInteiros=[8,9,6,5,7,2,3,1,10]
    let maiorNumero=numerosInteiros[0];
    let menorNumero=numerosInteiros[0];
    numerosInteiros.forEach(number=> {
        
        if(maiorNumero< number){
            maiorNumero=number;
            
        }if(menorNumero>number){
            menorNumero=number;
            
        }
        
    });
    console.log( `O numero ${maiorNumero} é o maior valor do array`)
    console.log(`O numero ${menorNumero} é o menor valor do array`)
    }
    numeroMaior();