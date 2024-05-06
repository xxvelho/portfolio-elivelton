const body = document.body;

function ativarTema1() {
    body.classList.remove('tema-2');
    body.classList.remove('tema-3');
    body.classList.add('tema-1');
}

function ativarTema2() {
    body.classList.remove('tema-1');
    body.classList.remove('tema-3');
    body.classList.add('tema-2');
}

function ativarTema3() {
    body.classList.remove('tema-1');
    body.classList.remove('tema-2');
    body.classList.add('tema-3');
}