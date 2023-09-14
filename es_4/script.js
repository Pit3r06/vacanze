
let Bsoggiorno = false;
let Bletto = false;
let Bbagno = false;
let Bcucina = false;

function soggiorno(){

    let element = document.getElementById('Dsoggiorno');

    if (!Bsoggiorno) {
        
        element.style.display = 'block';
        Bsoggiorno = true;

    }
    else
    {
        element.style.display = 'none';
        Bsoggiorno = false;

    }


}

function letto(){

    let element = document.getElementById('Dletto');

    if (!Bletto) {
        
        element.style.display = 'block';
        Bletto = true;

    }
    else
    {
        element.style.display = 'none';
        Bletto = false;

    }
}

function bagno(){

    let element = document.getElementById('Dbagno');

    if (!Bbagno) {
        
        element.style.display = 'block';
        Bbagno = true;

    }
    else
    {
        element.style.display = 'none';
        Bbagno = false;

    }
}

function cucina(){

    let element = document.getElementById('Dcucina');

    if (!Bcucina) {
        
        element.style.display = 'block';
        Bcucina = true;

    }
    else
    {
        element.style.display = 'none';
        Bcucina = false;

    }
}