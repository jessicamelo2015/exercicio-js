
const{calculoMdc} = require ("./exerc01")

const{numeroMaior} = require ("./exerc02")

const{multiplos} = require ("./exerc03")

describe('testando as funcionalidades do exercicio 01', () => {
    it('calculando o MDC', () => {
        expect(calculoMdc(69,80)).toBe(1)
        expect(calculoMdc(18,60)).toBe(6)
    });
  
   
});
describe('testando as funcionalidades do exercicio 02', () => {

    it('verificando o numero maior e menor do array', () => {
        const numerosInteiros = [8, 9, 6, 5, 7, 2, 3, 1, 10];
        const resultado = numeroMaior(numerosInteiros);
        expect(resultado.maior).toBe(10)
        expect(resultado.menor).toBe(1)
    });
    

});
describe('testando as funcionalidades do exercicio 03', () => {

    it('verificando a soma dos multiplos', () => {
        const numeros=multiplos(5,7)
        expect(numeros).toBe(157361)
    });
    

});