const carro = (function carro() {
    let velocidade = 0;
    let marcha = 0;
    let combustivel = 0;

    function abastecerCarro() {
        return (combustivel += 20);
    }

    function acelerarCarro(acelerando) {
        velocidade = velocidade + acelerando;
        console.log('VRUUUUUUM');
    }

    function frearCarro(freando) {
        velocidade = velocidade - freando;
        console.log('freando o carro');
    }

    function trocarMarcha(trocarMarcha) {
        marcha = marcha + trocarMarcha;
    }
    function mostrarMarcha() {
        console.log(marcha);
    }
    return {
        frear() {
            frearCarro()
        },
        acelerar() {
            acelerarCarro()
        },
        trocar() {
            trocarMarcha(1)
            mostrarMarcha()
        },
        abastecer() {
            console.log('abastecendo', abastecerCarro);
        }

    }

})();

carro.acelerar();
carro.frear();
carro.trocar();
carro.trocar();
carro.trocar();
carro.trocar();
carro.trocar();
carro.abastecer();
