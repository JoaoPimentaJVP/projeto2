var canvas = document.getElementById('meucanvas');
var ctx = canvas.getContext('2d');
var cronometro=0;
var fase = -1;
var cliquey=0;
var cliquex =0;
var posicaoAx=0;
var posicaoAy = 0;

var x1=0;
var x2=0;
var x3=0;

var y1=0;
var y2=0;
var y3=0;

function NA(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}

canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect()
    var cliquex = e.clientX - elRect.left
    var cliquey = e.clientY - elRect.top

    if(fase==-1&& cliquex>canvas.width/2-330/2&&cliquex<canvas.width/2-330/2+330&&
        cliquey>canvas.height/2+141&&cliquey<canvas.height/2+141+141
    ){
        fase=0;
    }

    if(fase>0){
        if(cliquex>posicaoAx&&cliquex<posicaoAx+200&&
            cliquey>posicaoAy&&cliquey<posicaoAy+200
        ){
        fase+=1;
        psomados=Math.floor((1220-tempo)/100)+1;
        pontuacao+=psomados;
        t=0;
        G=190;
        R=0;
        m=1+fase/5;
        posicaoAx=0;
        tempo=0;
        escolhido=0;
        } else{
            erro.play();
            if(t>=180){
                m=m*1.5;
            }
        }
    }

    if(terminou==1&&cliquex>canvas.width/2-762/2&&cliquex<canvas.width/2-762/2+762&&
        cliquey>canvas.height-141&&cliquey<canvas.height-141+111){
            document.location.reload();
    }
})

carregar();
function Desenhar(){
    musica.play();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(fase==-1){
        passarFundo();
        ctx.drawImage(titulo,canvas.width/2-492/2,30);
        ctx.drawImage(jogar,canvas.width/2-330/2,canvas.height/2+141,330,141);
    } else if (fase==0){
        passarFundo();
        ctx.drawImage(tutorial,30,30);
        cronometro+=1;
        if(cronometro>400){
            fase=1;
        }
    } else if(fase>0){
        intro();
        if(t==180){
            ctx.drawImage(mata,0,0,1280,720);
            barra();
            if(!posicaoAx){
                var ara=[[920,280],[180,280],[550,400],[550,120]];
                var ale= NA(4,1);
                if(ale==1){
                    posicaoAx=ara[0][0];
                    posicaoAy=ara[0][1];
                    ara.splice(0,1);
                } else if (ale==2){
                    posicaoAx=ara[1][0];
                    posicaoAy=ara[1][1];
                    ara.splice(1,1);
                } else if (ale==3){
                    posicaoAx=ara[2][0];
                    posicaoAy=ara[2][1];
                    ara.splice(2,1);
                } else if (ale==4){
                    posicaoAx=ara[3][0];
                    posicaoAy=ara[3][1];
                    ara.splice(3,1);
                }
                ale=NA(3,1);
                if(ale==1){
                    x1=ara[0][0];
                    y1=ara[0][1];
                    ara.splice(0,1);
                } else if (ale==2){
                    x1=ara[1][0];
                    y1=ara[1][1];
                    ara.splice(1,1);
                } else if (ale==3){
                    x1=ara[2][0];
                    y1=ara[2][1];
                    ara.splice(2,1);
                }


                ale=NA(2,1);
                if(ale==1){
                    x2=ara[0][0];
                    y2=ara[0][1];
                    x3=ara[1][0];
                    y3=ara[1][1];
                } else if (ale==2){
                    x2=ara[1][0];
                    y2=ara[1][1];
                    x3=ara[0][0];
                    y3=ara[0][1];
                } 
            }
            Gerar();
            IMGanimais=[leao,elefante,girafa,tigre,macaco,jacare,zebra,tucano,sapo,capivara];
            console.log(escolhido+" "+i1+" "+i2+" "+i3)
            ctx.drawImage(escolhido,posicaoAx,posicaoAy,200,200);
            ctx.drawImage(i1,x1,y1,200,200);
            ctx.drawImage(i2,x2,y2,200,200);
            ctx.drawImage(i3,x3,y3,200,200);
        }
    }

    if(terminou==1){
        acabou();
    }
    
};

setInterval(Desenhar,10);