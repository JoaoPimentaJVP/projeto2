var musica,erro;

function carregar(){
    musica = new Audio();
    musica.src = 'SND/t.mp3';
    musica.load();
    musica.volume = 0.8;
    musica.loop = true;

    erro = new Audio();
    erro.src = 'SND/e.mp3';
    erro.load();
    erro.volume = 0.8;
    erro.loop = false;
}