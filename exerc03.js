function multiplos(){
    let i=0;
     let resultado=1000;
     while(resultado >0){
        if(resultado  % 5 ===0  ||resultado % 7===0){
        i+=resultado;
        
        }
        resultado--;
       
     }
     return i;
}
console.log(`a soma dos multiplos de 5 ou 7 é ${multiplos()}`);