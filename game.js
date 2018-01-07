document.addEventListener('DOMContentLoaded', function() {

  var emptyFields;

  $("body").prepend("<h2> Garfield kontra Łoś </h2>");
  $("h2").addClass("title");
  $("body").append("<h3>ruch Garfielda </h3>");
  $("h3").addClass("roundInfo");
  $("body").append("<h4></h4>")
  $("body").append("<h4></h4>")
  var a =  $("h4").first();
  var b =  $("h4").last()
  var wynikA;
  var wynikB;
  $("body").append("<button type=button> resetuj wyniki </button>")
  var playerClasses = { //to jest obiekt - jak się do niego odnoszę, to mogę pobrać wartość danych elementów
    'playerA' : 'red',
    'playerB' : 'blue'
  };
  $(".red").prepend("<img id='kot' src='Garfield.jpg'/>")


  var currentPlayer;

  initGame();

  function initGame() {
    // wybiera wszystkie divy
    emptyFields = 9
    var fields = document.querySelectorAll('.board > div');
    currentPlayer = 'playerA';


    fields.forEach(field => field.addEventListener('click', fieldClickHandler));
          fields.forEach(field => field.removeAttribute('class'));
    //    fields.forEach(field => removeAtributte('class'));
  // ten cały kawałek od fields.forEach, można równie dobrze zastąpić arrow function:
  // fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  wynikA = 0;
  wynikB = 0;
 a.text("punkty Garfielda: " + wynikA);
 b.text("punkty Łosia: " + wynikB);
  }


  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);


    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
      $("h3").text("ruch Łosia");
    } else {
      currentPlayer = 'playerA';
      $("h3").text("ruch Garfielda");
    }

    this.removeEventListener('click', fieldClickHandler);

    emptyFields--;
    checkWinner()



  } // zamyka function fieldClickHandler()

function checkWinner() {
  var fields = document.querySelectorAll('.board > div');

  var row1 = fields[0].className + fields[1].className + fields[2].className;
  var row2 = fields[3].className + fields[4].className + fields[5].className;
  var row3 = fields[6].className + fields[7].className + fields[8].className;

  var column1 = fields[0].className + fields[3].className + fields[6].className;
  var column2 = fields[1].className + fields[4].className + fields[7].className;
  var column3 = fields[2].className + fields[5].className + fields[8].className;

  var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
  var diagonal2 = fields[2].className + fields[4].className + fields[6].className;

  var boardCheck = [
    row1,
    row2,
    row3,
    column1,
    column2,
    column3,
    diagonal1,
    diagonal2
  ];

  if (boardCheck.includes('redredred')) {
    setTimeout(() => {
      alert("Garfield wygrywa!");
      initGame();
      wynikA++;
      a.text("punkty Garfielda: " + wynikA);
    }, 100);
  }

  if (boardCheck.includes('blueblueblue')) {
    setTimeout(() => {
    alert("Łoś wygrywa!");
    initGame();
    wynikB++;
    b.text(" punkty Łosia: " + wynikB);
  }, 100);
  }

  if (emptyFields === 0 && !boardCheck.includes('blueblueblue') && !boardCheck.includes('redredred')) {
    setTimeout(() => {
    alert("Tie");
    initGame();
  }, 100);
  }

} // zamyka function checkWinner()

$("button").click(function() {
  wynikA = 0;
  wynikB = 0;
  a.text("punkty Garfielda: " + wynikA);
  b.text("punkty Łosia: " + wynikB);
});

});
