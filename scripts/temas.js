const body = document.body;

function ativarTema1() {
    body.classList.remove('tema-2');
    body.classList.remove('tema-3');
    if(body.classList.contains('tema-1')){
        body.classList.remove('tema-1');
        body.classList.add('tema-padrao');
        let elemento = document.getElementById('tema-1');
        elemento.style.background = '#163020';
    }
    else{
        body.classList.add('tema-1');
        let elemento = document.getElementById('tema-1');
        elemento.style.background = '#241023';
    }
}

function ativarTema2() {
    body.classList.remove('tema-1');
    body.classList.remove('tema-3');
    if(body.classList.contains('tema-2')){
        body.classList.remove('tema-2');
        body.classList.add('tema-padrao');
        let elemento = document.getElementById('tema-2');
        elemento.style.background = '#0C0C0C';
    }
    else{
        body.classList.add('tema-2');
        let elemento = document.getElementById('tema-2');
        elemento.style.background = '#241023';
    }
}

function ativarTema3() {
    body.classList.remove('tema-1');
    body.classList.remove('tema-2');
    if(body.classList.contains('tema-3')){
        body.classList.remove('tema-3');
        body.classList.add('tema-padrao');
        let elemento = document.getElementById('tema-3');
        elemento.style.background = '#860A35';
    }
    else{
        body.classList.add('tema-3');
        let elemento = document.getElementById('tema-3');
        elemento.style.background = '#241023';
    }
}