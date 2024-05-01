function calculoMdc(a,b){
    while(b!==0){
        let numero=b
        b=a%b
        a=numero;
    }return a;
}

let number1=69;
let number2=80;
let resultado=calculoMdc(number1,number2);
console.log(`MDC de ${number1} e ${number2} : ${resultado}`);
