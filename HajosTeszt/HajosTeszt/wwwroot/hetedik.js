window.onload = () => {
    letöltés();
}

var kérdések;
var sorszám = 0;

    function letöltés() {
    fetch("/questions.json")
        .then(r => r.json())
        .then(data => letöltésBefejeződött(data));
}
    

        function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
            console.log(d)
            kérdések = d;
            kérdésMegjelenítés(0)
        }

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    

    document.getElementById("kép2").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
}

function következő() {
    sorszám++;
    if (sorszám == kérdések.length) {
        sorszám = 0;
    }
    kérdésMegjelenítés(sorszám);
}

function előző() {
    sorszám--;
    if (sorszám == kérdések.length) {
        sorszám = 0;
    }
    kérdésMegjelenítés(sorszám)
}

function szinezd(n) {
    if (n == kérdések[sorszám].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó")
        console.log("jó");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz")
        console.log("rossz");
    }
}

function visszaszinez() {
    document.getElementById("válasz1").style.background = "white"
    document.getElementById("válasz2").style.background = "white"
    document.getElementById("válasz3").style.background = "white"
    }