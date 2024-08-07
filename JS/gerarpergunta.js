var animais=["o leão","o elefante","a girafa","o tigre","o macaco","o jacaré","a zebra","o tucano","o sapo","a capivara"];
var escolhido=0;
var i1=0;
var i2=0;
var i3=0;
var n1=0;
function Gerar(){
    if(!escolhido){
        IMGanimais=[leao,elefante,girafa,tigre,macaco,jacare,zebra,tucano,sapo,capivara];
        n1=NA(9,0);
        escolhido=IMGanimais[n1];
        IMGanimais.splice(n1,1);
        var n2=NA(8,0)
        i1=IMGanimais[n2];
        IMGanimais.splice(n2,1);
        var n3=NA(7,0)
        i2=IMGanimais[n3];
        IMGanimais.splice(n3,1);
        var n4=NA(6,0)
        i3=IMGanimais[n4];
        IMGanimais.splice(n4,1);
    }
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText("Qual é "+animais[n1]+"?",50,670)
    ctx.restore();
}

