// var snd = new Audio("https://docs.google.com/uc?export=download&amp;id=1ettkn-j79KhfddeGRafzL4E6DTqG6E0A");
// var hours = (parseInt(document.getElementById('hours').value) || 0);
// var minutes = (parseInt(document.getElementById('minutes').value) || 0);
// var seconds = (parseInt(document.getElementById('seconds').value) || 0);

function actualTimer(seconds = 1, minutes = 0, hours = 0) {
    let segundos = seconds + minutes * 60 + hours * 3600;

    setTimeout(function () {
        let secundos = segundos;

        console.log(`${secundos/3600>>0}:${(secundos % 3600)/60>>0}:${secundos %= 60}`);

        if (segundos-- == 0) {
            beep();
            return;
        }
        actualTimer(segundos);
    }, 1000);

}

function beep() {
    // snd.play();
    console.log("THANKS FOR USING")
    console.log("FIN")
}

const seconds = 10;
const minutes = 0;
const hours = 0;

if (seconds < 0 || minutes < 0 || hours < 0) {
    // alert("Valores inseridos invalidos");
} else {
    actualTimer(seconds, minutes, hours);
}