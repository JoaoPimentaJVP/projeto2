posicaoy=0;
diferencay=0;
function passarFundo(){
    ctx.drawImage(fundo,0,posicaoy+diferencay);
    ctx.drawImage(fundo,0,posicaoy-720+diferencay);
    diferencay+=2;
    if(diferencay>720){
        diferencay=0;
    }
}