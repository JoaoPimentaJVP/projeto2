var t = 0;
var psomados=0;
function intro(){
    if(t<180){
        erro.pause();
        erro.currentTime=0;
        passarFundo();
        if(fase==1){
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 50px sans-serif';
            ctx.fillText("pontuação: 0", 450, 580)
            ctx.restore();
        } else if(fase>1){
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 50px sans-serif';
            ctx.fillText("+"+psomados+" pontos!", 470, 580)
            ctx.restore();
        }
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 100px sans-serif';
        ctx.fillText("Fase " + fase, 450, 380)
        ctx.restore();
        t+=1;
    }
}