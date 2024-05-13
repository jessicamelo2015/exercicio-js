const{multiplos} = require ("./exerc03")



describe('testando as funcionalidades do exercicio 03', () => {

    it('verificando a soma dos multiplos', () => {
        const numeros=multiplos(5,7)
        expect(numeros).toBe(157361)
    });
    

});