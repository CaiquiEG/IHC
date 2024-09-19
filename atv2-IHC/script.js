function adicao (a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a  * b;
}

divisao => a / b;

function divisaoZero(a,b) {
    if (b == 0) {
        return 'Erro';
    }

    return a / b;
}

function numeroPar(a) {
    if (a % 2 == 0) {
        return true;
    }

    return false;
}

function somaIntervalo(a, b) {
    let soma;

    for(let i = a; i <=b; i++) {
        soma+=i;
    }

    return soma;
}

function fatorial(a) {

}

function vogais(a) {
    function vogais(a) {
        const vogais = ['a', 'e', 'i', 'o', 'u'];

        for (let i = 0; i < a.length; i++) {
            if (vogais.includes(a[i])) {
                contador++;
            }
        }

        return contador;
    }
}

console.log(vogais('java'))