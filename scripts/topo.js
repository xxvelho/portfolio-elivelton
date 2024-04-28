document.addEventListener('DOMContentLoaded', function() {
    var botaoVoltarAoTopo = document.getElementById('voltarAoTopo');

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) { // Mostrar o botão quando o usuário rolar 100 pixels para baixo
            botaoVoltarAoTopo.style.display = 'block';
        } else {
            botaoVoltarAoTopo.style.display = 'none';
        }
    };

    botaoVoltarAoTopo.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});
