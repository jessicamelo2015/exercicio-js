
const{calculoMdc} = require ("./exerc01")


describe('testando as funcionalidades do exercicio 01', () => {
    it('calculando o MDC', () => {
        expect(calculoMdc(69,80)).toBe(1)
        expect(calculoMdc(18,60)).toBe(6)
    });
  
   
});
