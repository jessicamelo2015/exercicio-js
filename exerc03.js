function multiplos(number1,number2){
    let i=0;
     let resultado=1000;
     let numeroEscolhido1=number1
     let numeroEscolhido2=number2
     while(resultado >0){
        if(resultado  % numeroEscolhido1 ===0  ||resultado % numeroEscolhido2===0){
        i+=resultado;
        
        }
        resultado--;
       
     }
     return i;
}
//console.log(`a soma dos multiplos de 5 ou 7 é ${multiplos()}`);


module.exports={multiplos}



