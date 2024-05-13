const{numeroMaior} = require ("./exerc02")

describe('testando as funcionalidades do exercicio 02', () => {

    it('verificando o numero maior e menor do array', () => {
        const numerosInteiros = [8, 9, 6, 5, 7, 2, 3, 1, 10];
        const resultado = numeroMaior(numerosInteiros);
        expect(resultado.maior).toBe(10)
        expect(resultado.menor).toBe(1)
    });
    

});