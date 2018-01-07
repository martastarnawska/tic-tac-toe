document.addEventListener('DOMContentLoaded', function() {

  var emptyFields;

  var playerClasses = { //to jest obiekt - jak się do niego odnoszę, to mogę pobrać wartość danych elementów
    'playerA' : 'red',
    'playerB' : 'blue'
  };

  var currentPlayer;

  initGame();

  function initGame() {
    // wybiera wszystkie divy
    emptyFields = 9
    var fields = document.querySelectorAll('.board > div');
    currentPlayer = 'playerA'
    fields.forEach(function(field){
      field.addEventListener('click', fieldClickHandler);
    });
  // ten cały kawałek od fields.forEach, można równie dobrze zastąpić arrow function:
  // fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  }


  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);

    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
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

  if (row1 === 'redredred' || row2 === 'redredred' || row3 === 'redredred' ||
      column1 === 'redredred' || column2 === 'redredred' || column3 === 'redredred' ||
      diagonal1 === 'redredred' || diagonal2 === 'redredred') {
        alert("Red Wins!");
        initGame()
      }

    if (row1 === 'blueblueblue' || row2 === 'blueblueblue' || row3 === 'blueblueblue' ||
        column1 === 'blueblueblue' || column2 === 'blueblueblue' || column3 === 'blueblueblue' ||
        diagonal1 === 'blueblueblue' || diagonal2 === 'blueblueblue') {
          alert("Red Wins!");
          initGame()
        }
    if (emptyFields === 0) {
      alert("Tie");
      initGame()
    }

    console.log(emptyFields)
} // zamyka function checkWinner()

});
