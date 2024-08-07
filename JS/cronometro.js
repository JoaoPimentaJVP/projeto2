var G = 190;
var R = 0;
var tempo=0;
var largurabarra = 1220-tempo;
var m = 1;
var GO = new Image();
GO.src = "IMG/GO.png";
var terminou = 0;
var JN = new Image();
JN.src = "IMG/JN.png";
pontuacao = 0;

function acabou(){
    ctx.drawImage(GO,0,0);
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText("Pontuação " +pontuacao, 450, 400)
    ctx.restore();
    ctx.drawImage(JN,canvas.width/2-762/2,canvas.height-141,762,111);
}


function barra(){
    if(t==180){
        var largurabarra = 1220-tempo;
        ctx.fillStyle= "rgb("+R+","+ G+",0)";
        ctx.fillRect(30,30,largurabarra,30)
        tempo+=2*m;
        if(R<255){
            R+=0.9*m;
        } else if(R>255){
            G-=0.6*m;
        }
        if(tempo>1220){
            tempo=1220;
        }
        if(tempo==1220){
            terminou = 1;
        }
    }
}