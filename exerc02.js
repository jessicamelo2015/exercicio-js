function numeroMaior(numerosInteiros){
    
    let maiorNumero=numerosInteiros[0];
    let menorNumero=numerosInteiros[0];
    numerosInteiros.forEach(number=> {
        
        if(maiorNumero< number){
            maiorNumero=number;
            
        }if(menorNumero>number){
            menorNumero=number;
            
        }
        
    });
    return {
        maior: maiorNumero,
        menor: menorNumero
    };
    
}
//console.log(numeroMaior());

    module.exports={numeroMaior}