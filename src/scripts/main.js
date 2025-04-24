AOS.init();


const dataDoAniversario = new Date("Dec 14, 2025 19:00:00");
const timesStampAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteAniversario = timesStampAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;    
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteAniversario = Math.floor(distanciaAteAniversario / diaEmMs);
    const horasAteAniversario = Math.floor((distanciaAteAniversario % diaEmMs) / horaEmMs);
    const minutosAteAniversario= Math.floor((distanciaAteAniversario % horaEmMs) / minutoEmMs);
    const segundosAteAniversario = Math.floor((distanciaAteAniversario % minutoEmMs) / segundoEmMs);

    document.getElementById('contador').innerHTML =`${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`;

    if (distanciaAteAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = " Evento expirado!";
    }
    
}, 1000);