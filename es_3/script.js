
var elementi = new Array("BARCA","HTML","CASA","CASSA","BAGNO","SOGGIORNO", "PANE","ACQUA","BIRRA","VINO");
var indovina = "";
var parola = "";
var lettere = "";
var sbagliata = 0;
var gioca = true;
let img = document.getElementById('img')


function selectLetter(l) {

    if (gioca == false) {

        return;

    }

    if (lettere.indexOf(l) != -1) {

        return;

    }

    lettere += l;

    document.game.usedLetters.value = lettere;

    if (indovina.indexOf(l) != -1) {

        i = 0;
        temp_mask = parola;

        while (indovina.indexOf(l, i) != -1) {

            i = indovina.indexOf(l, i);
            end = i + 1;
            start_text = temp_mask.substring(0, i);
            end_text = temp_mask.substring(end, temp_mask.length);
            temp_mask = start_text + l + end_text;
            i = end;
        }

        parola = temp_mask;

        document.game.displayWord.value = parola;

        if (parola.indexOf("#") == -1) {

            alert("Vinto!");
            gioca = false;
            pulisci();

        }
    }
    else {

        sbagliata += 1;

        img.src ="/img/img_" + sbagliata + ".jpg";

        if (sbagliata == 10) {

            alert("Perso!");
            gioca = false;
            pulisci();

        }
    }
}

function pulisci() {

    selectWord();
    document.game.usedLetters.value = "";
    lettere = "";
    sbagliata = 0;
    document.img.src = "img/img_start.jpg";

}

function selectWord() {

    gioca = true;
    random_number = Math.round(Math.random() * (elementi.length - 1));
    indovina = elementi[random_number];

    nascosta = pleaceholder(indovina);
    document.game.displayWord.value = nascosta;
    parola = nascosta;

}

function pleaceholder(m) {

    maschera = "";
    word_lenght = m.length;

    for (i = 0; i < word_lenght; i++) {

        maschera += "#";
    }
    return maschera;

}
