

var elementi  = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','A', 'B', 'C', 'D', 'E', 'F', 'G','H'];
var aus = [];
var interval;
var iconaFind = document.getElementsByClassName("find");
var messageBox = document.getElementById('messageBox');

document.body.onload = startGame();


function shuffle(a) {

  var i = a.length;
  var temporaryValue, randomIndex;

  while (i !== 0) {
    randomIndex = Math.floor(Math.random() * i);
    i -= 1;
    temporaryValue = a[i];
    a[i] = a[randomIndex];
    a[randomIndex] = temporaryValue;
  }
  return a;
}

function playAgain(){
  messageBox.classList.remove("active");
  startGame();
}

function startGame(){

  clearInterval(interval);
  arrayConfronto = [];
  var arrayShuffle = shuffle(elementi);
  var lista = document.getElementById('tabella');

  while (lista.hasChildNodes()) {  
    lista.removeChild(lista.firstChild);
  }

  for(var i = 0; i < 16; i++){    

    var box = document.createElement('div');
    var element = document.createElement('div');
    element.className = 'icon';
    document.getElementById('tabella').appendChild(box).appendChild(element);
    element.innerHTML = arrayShuffle[i];

  }

  startTimer();

  var icon = document.getElementsByClassName("icon");
  var icona = [...icon];

  for (var i = 0; i < icona.length; i++){

    icona[i].addEventListener("click", visualizza);
    icona[i].addEventListener("click", openmessageBox);

  }

}


function visualizza(){

  var icon = document.getElementsByClassName("icon");
  var icona = [...icon];
  this.classList.toggle("show");
  aus.push(this);
  var len = aus.length;

  if(len === 2){

    if(aus[0].innerHTML === aus[1].innerHTML){

      aus[0].classList.add("find","disabled");
      aus[1].classList.add("find","disabled");
      aus = [];               

    } else {

      icona.forEach(function(item){

        item.classList.add('disabled');

      });

      setTimeout(function(){

        aus[0].classList.remove("show");
        aus[1].classList.remove("show");

        icona.forEach(function(item){

          item.classList.remove('disabled');

          for(var i = 0; i < iconaFind.length; i++){

              iconaFind[i].classList.add("disabled");

            }

        });

        aus = [];

      },700); 

    }

  }

}


function openmessageBox(){  

  if (iconaFind.length == 16){

    clearInterval(interval);
    messageBox.classList.add("active");
    document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;

    closemessageBox();

  }
}

function closemessageBox(){  

  closeicon.addEventListener("click", function(e){

    messageBox.classList.remove("active");

    startGame();

  });
}

function startTimer(){

  var s = 0; var  j = 0; var h = 0;

  interval = setInterval(function(){

    s++;
    if(s == 60){

      j++;
      s = 0;

    }
    if(m == 60){

      h++;
      j = 0;

    }

  },1000);
  
}

  
 