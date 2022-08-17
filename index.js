const relogio=document.querySelector(".digital");

let srelogio=document.querySelector(".p_s");
let mrelogio=document.querySelector(".p_m");
let hrelogio=document.querySelector(".p_h");

function atualizar(){
  let now=new Date();
  let hora=now.getHours();
  let minutos=now.getMinutes();
  let segundos=now.getSeconds()


    let sDeg = ((360 / 60) * segundos) - 90;
    let mDeg = ((360 / 60) * minutos) - 90;
    let hDeg = ((360 / 12) * hora) - 90;

    srelogio.style.transform = `rotate(${sDeg}deg)`;
    mrelogio.style.transform = `rotate(${mDeg}deg)`;
    hrelogio.style.transform = `rotate(${hDeg}deg)`;

    if(hora<10){
        hora="0"+hora;
    }
    if(minutos < 10){
        minutos="0"+minutos
    }
    if(segundos < 10){
        segundos="0"+ segundos
    }

    relogio.innerHTML=hora + ":" + minutos + ":" + segundos;
}


setInterval(atualizar,1000);