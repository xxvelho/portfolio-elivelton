const body = document.body;
const temas = document.querySelectorAll('.menu-navegacao-temas-tema');

function ativarTema(temaSelecionado) {
    const temasClasses = ['tema-1', 'tema-2', 'tema-3'];

    body.classList.remove('tema-padrao', ...temasClasses);

    temas.forEach(tema => tema.classList.remove('invisivel'));

    body.classList.add(temaSelecionado);
    document.getElementById(temaSelecionado).classList.add('invisivel');
}

function ativarTemaPadrao() {
    ativarTema('tema-padrao');
}

function ativarTema1() {
    ativarTema('tema-1');
}

function ativarTema2() {
    ativarTema('tema-2');
}

function ativarTema3() {
    ativarTema('tema-3');
}
