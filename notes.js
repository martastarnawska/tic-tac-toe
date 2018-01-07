if (row1 === 'redredred' || row2 === 'redredred' || row3 === 'redredred' ||
    column1 === 'redredred' || column2 === 'redredred' || column3 === 'redredred' ||
    diagonal1 === 'redredred' || diagonal2 === 'redredred') {
      alert("Red Wins!");
      initGame();
    }

  if (row1 === 'blueblueblue' || row2 === 'blueblueblue' || row3 === 'blueblueblue' ||
      column1 === 'blueblueblue' || column2 === 'blueblueblue' || column3 === 'blueblueblue' ||
      diagonal1 === 'blueblueblue' || diagonal2 === 'blueblueblue') {
        alert("Red Wins!");
        initGame();
      }
  if (emptyFields === 0) {
    alert("Tie");
    initGame();
  }


  box-sizing: border-box;
	border-style: solid;
	border-radius: 5px;
	border-width:thin;
