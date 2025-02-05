function provjeri() {
    var pitanje1 = document.kviz.pitanje1.value;
    var pitanje2 = document.kviz.pitanje2.value.trim().toLowerCase();
    var pitanje3 = document.kviz.pitanje3.value;
    var pitanje4 = document.kviz.pitanje4.value.trim().toLowerCase();
    var pitanje5 = document.kviz.pitanje5.value;
    var pitanje6 = document.kviz.pitanje6.value;
    var pitanje7 = document.kviz.pitanje7.value.trim().toLowerCase();
    var pitanje8 = document.kviz.pitanje8.value;
    var pitanje9 = document.kviz.pitanje9.value;
    var pitanje10 = document.kviz.pitanje10.value;

    var rezultat = 0;

    if (pitanje1 == "b") {
        rezultat++;
    }

    if (pitanje2 == "background-color") {
        rezultat++;
    }

    if (pitanje3 == "b") {
        rezultat++;
    }

    if (pitanje4 == "<ul>") {
        rezultat++;
    }

    if (pitanje5 == "a") {
        rezultat++;
    }

    if (pitanje6 == "a") {
        rezultat++;
    }

    if (pitanje7 == "<a>") {
        rezultat++;
    }

    if (pitanje8 == "c") {
        rezultat++;
    }

    if (pitanje9 == "b") {
        rezultat++;
    }

    if (pitanje10 == "a") {
        rezultat++;
    }

    var messages = [
        "Nedovoljan 1", 
        "Dovoljan 2", 
        "Dobar 3", 
        "Vrlo dobar 4", 
        "Bravo, odličan 5"
    ];
    var pictures = [
        "fail.gif", 
        "fail.gif", 
        "fail.gif", 
        "ok.gif", 
        "top.gif"
    ];

    var range = 0;

    if (rezultat >= 9) {
        range = 4;
    } else if (rezultat >= 7) {
        range = 3;
    } else if (rezultat >= 5) {
        range = 2;
    } else if (rezultat >= 3) {
        range = 1;
    }

    document.getElementById("after").style.visibility = "visible";
    document.getElementById("poruka").innerHTML = messages[range];
    document.getElementById("broj_tocnih").innerHTML = "Imaš " + rezultat + " točnih odgovora";
    document.getElementById("slika").src = pictures[range];
}