console.log(" Minta Futunk!")

var faktorialis = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

var faktorialisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;

    } else {
        return n * faktorialisR(n-1)
    }
}


for (var s = 0; s < 10; s++) {
    console.log(`${s} : ${faktorialisR(s)}`)
}

function számítás() {
    let n = document.getElementById("nTb").value
    let n2 = parseInt(n)
    if (n2) {
        let er = faktorialisR(n)
        document.getElementById("eredmenyDiv").innerText = er
       
    }
    else {
        document.getElementById("eredmenyDiv").innerText = "Rossz paraméter"
    }  
}

window.onload = () => {
    let hova = document.getElementById("ide");
    hova.classList.add("sor")
    for (var s = 1; s < 11; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor);
        sor.innerText = (s)
        sor.style.background = "rgb(" + 255 / (s / 4) + ",0,0)";
      

        hova.appendChild(sor);
        //for (var o = 0; o < 10; o++) {
        //    let szám = document.createElement("div");
        //    sor.appendChild(szám);
        //    szám.classList.add("elem")
        //    szám.style.background = `rgb(${255 / 10 * s},0,0)` 
        //    szám.innerText = (s + 1) * (o + 1);

        //}
    }
}    




