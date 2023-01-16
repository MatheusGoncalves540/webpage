//Variáveis
var segundos = 0;
var TempoPorClick = 1;
//Variáveis

//Funções
document.getElementById("botaoclick").addEventListener("click", click);
function click()
{
    segundos += TempoPorClick;
    atualizartempo();
}


function ContarSegundos(){
    segundos += 1;
    
    atualizartempo();
    
} setInterval(ContarSegundos, 1000);


function atualizartempo(){
    document.getElementById("tempo").innerHTML ="Já passou " + segundos +" segundos...";
    document.querySelector(".rotate_minuto").style.transform = 'rotate(' + (segundos * 0.1) + 'deg)';
    document.querySelector(".rotate_hora").style.transform = 'rotate(' + (segundos * 0.001666) + 'deg)';
    document.querySelector(".rotate_segundo").style.transform = 'rotate(' + (segundos * 6) + 'deg)';
}

atualizartempo();


