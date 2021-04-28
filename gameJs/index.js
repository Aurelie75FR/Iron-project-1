// const gameView = document.querySelector('.container')
// const start = document.querySelector('.start')
// gameView.style.visibility = 'hidden'
// start.style.display = ''
// start.addEventListener('click', evt =>{
//   gameView.style.visibility='visible';
//   start.style.display='none';
// })

function game() {
  deckOne = createDeck(); //blue
  deckTwo = createDeck(); //red

  let blue = 'blue';
  let red = 'red';
  let divDeck = '';
  //loop throught an array of cards to build a deck and display decks
  for (let i = 0; i < 5; i++) {
    divDeck +=
    '<img id="blue'+deckOne[i].img+'"onclick="select(' +i+","+0+')" src="'+deckOne[i].img+'" />';
    // `<img id="blue" onclick="select(${i}, ${+0}) src="${deckOne[i].img}"/>`;
    // console.log(divDeck);
  }
  document.getElementById('deckOne').innerHTML = divDeck;

  divDeck = '';
  for (let i = 0; i < 5; i++) {
    divDeck +=
      '<img id ="red'+deckTwo[i].img+'"onclick="select('+i+","+1+')"src="'+deckTwo[i].img+'"/>';
    // console.log(divDeck);
  }
  document.getElementById('deckTwo').innerHTML = divDeck;
}
//function randomize the deck
function createDeck() {
  let random = Math.floor(Math.random() * cards.length);
  // new constructor discovered after Number, String ... Array!!!
  let deck = new Array(cards[random]);
  random = Math.floor(Math.random() * cards.length);
  deck.push(cards[random]);
  random = Math.floor(Math.random() * cards.length);
  deck.push(cards[random]);
  random = Math.floor(Math.random() * cards.length);
  deck.push(cards[random]);
  random = Math.floor(Math.random() * cards.length);
  deck.push(cards[random]);

  //console.log(deck);
  return deck;
}


function select(i, team) {
  if (team == 1) {
    if (playerTurn == 'red') {
      redCard = deckTwo[i];
      document.getElementById('cardSelect').innerHTML =
        '<img src="' + redCard.img + '""  />';
       // console.log(redCard);
       // console.log(playerTurn);
      } else {
        alert("That's not your deck !");
      }
    } else {
      if (playerTurn == 'blue') {
        blueCard = deckOne[i];
        document.getElementById('cardSelect').innerHTML =
        '<img src="' + blueCard.img + '"  " />';
        
        // console.log(blueCard);
        // console.log(playerTurn);
      } else {
        alert("That's not your deck !");
      }
    }
    // console.log(team);
}
// the fun part : the card placement
function cardsPlacement(nb) {
  if (emptyCell(nb)) {
    if (playerTurn == 'blue') {
      if (typeof (blueCard) == "undefined") {
        alert("You didn't select any card !");
      } else {
        document.getElementById(nb).src = blueCard.img;
        document.getElementById(nb).style.border = '5px solid blue';
        document.getElementById(nb).style.borderRadius = '10px';
        document.getElementById(nb).style.height = '221px'
        blackNwhiteCard(blueCard);
        cardPlay[nb] = blueCard;
        endOfTurn(nb);
        document.getElementById('nextTurn').innerHTML =
          'Player turn : <font class="teamRed">Red</font>';
        blueCard = undefined;
        playerTurn = 'red';
      }
    } else {
      if (typeof (redCard) == "undefined") {
        alert("You didn't select any card !");
      } else {
        document.getElementById(nb).src = redCard.img;
        document.getElementById(nb).style.border = '5px solid #EC201A';
        document.getElementById(nb).style.borderRadius = '10px';
        document.getElementById(nb).style.height = '221px'
       blackNwhiteCard(redCard);
        cardPlay[nb] = redCard;
        endOfTurn(nb);
        document.getElementById('nextTurn').innerHTML =
        'Player turn : <font class="teamBlue">Blue</font>';
        redCard = undefined;
        playerTurn = 'blue';
      }
    }
  } else {
    alert("A card is already place here!");
  }
 
  console.log(playerTurn);
}

function endOfTurn(nb) {
  turnVerification(nb);
  document.getElementById("cardSelect").innerHTML =
    '<img src="img/back.png">';
  nbTurn++;
  whoWon();
}
//Behold people! Here we are with Regex
function emptyCell(nb) {
  let regex = /\w*.png/; //<-- from MDN it's replace() String x name of the card the player pick
  if (document.getElementById(nb).src.match(regex) == 'gameBoard.png') {
    return true;
  } else {
    return false;
  }
}

function occupyCell(nb) {
  let regex = /\w*.png/;
  if (document.getElementById(nb).src.match(regex) != 'gameBoard.png') {
    return true;
  } else {
    return false;
  }
}

function turnVerification(nb) {
  let color = 'red';
  if (playerTurn == 'blue') {
    color = 'blue';
  }
  //let's compare cards value on the grid
  let border = '5px solid ' +color;
  switch (nb) {
    case 1: //<-- corner up left
      if (occupyCell(2)) {
        if (cardPlay[1].rightValue>cardPlay[2].leftValue) {
          document.getElementById(2).style.border=border
        } 
      }
      if (occupyCell(4)) {
        if (cardPlay[1].downValue>cardPlay[4].upValue) {
          document.getElementById(4).style.border=border
        }
      }
      break;

    case 2: // <-- up middle
      if (occupyCell(1)) {
        if (cardPlay[2].leftValue>cardPlay[1].rightValue) {
          document.getElementById(1).style.border=border
        }
      }
      if (occupyCell(3)) {
        if (cardPlay[2].rightValue>cardPlay[3].leftValue) {
          document.getElementById(3).style.border=border
        }
      }
      if (occupyCell(5)) {
        if (cardPlay[2].downValue>cardPlay[5].upValue) {
          document.getElementById(5).style.border=border
        }
      }
      break;

    case 3: //<-- corner up right
      if (occupyCell(2)) {
        if (cardPlay[3].leftValue>cardPlay[2].rightValue) {
          document.getElementById(2).style.border=border
        }
      }
      if (occupyCell(6)) {
        if (cardPlay[3].downValue>cardPlay[6].upValue) {
          document.getElementById(6).style.border=border
        }
      }
      break;

    case 4: //<-- middle left
      if (occupyCell(1)) {
        if (cardPlay[4].upValue>cardPlay[1].downValue) {
          document.getElementById(1).style.border=border
        }
      }
      if (occupyCell(5)) {
        if (cardPlay[4].rightValue>cardPlay[5].leftValue) {
          document.getElementById(5).style.border=border
        }
      }
      if (occupyCell(7)) {
        if (cardPlay[4].downValue>cardPlay[7].upValue) {
          document.getElementById(7).style.border=border
        }
      }
      break;

    case 5: //<-- middle
      if (occupyCell(2)) {
        if (cardPlay[5].upValue>cardPlay[2].downValue) {
          document.getElementById(2).style.border=border
        }
      }
      if (occupyCell(4)) {
        if (cardPlay[5].leftValue>cardPlay[4].rightValue) {
          document.getElementById(4).style.border=border
        }
      }
      if (occupyCell(6)) {
        if (cardPlay[5].rightValue>cardPlay[6].leftValue) {
          document.getElementById(6).style.border=border
        }
      }
      if (occupyCell(8)) {
        if (cardPlay[5].downValue>cardPlay[8].upValue) {
          document.getElementById(8).style.border=border
        }
      }
      break;

    case 6: //<-- middle right
      if (occupyCell(3)) {
        if (cardPlay[6].upValue>cardPlay[3].downValue) {
          document.getElementById(3).style.border=border
        }
      }
      if (occupyCell(5)) {
        if (cardPlay[6].leftValue>cardPlay[5].rightValue) {
          document.getElementById(5).style.border=border
        }
      }
      if (occupyCell(9)) {
        if (cardPlay[6].downValue>cardPlay[9].upValue) {
          document.getElementById(9).style.border=border
        }
      }
      break;

    case 7: //<-- corner down left
      if (occupyCell(4)) {
        if (cardPlay[7].upValue>cardPlay[4].downValue) {
          document.getElementById(4).style.border=border
        }
      }
      if (occupyCell(8)) {
        if (cardPlay[7].rightValue>cardPlay[8].leftValue) {
          document.getElementById(8).style.border=border
        }
      }
      break;

    case 8: //<-- down middle
      if (occupyCell(5)) {
        if (cardPlay[8].upValue>cardPlay[5].downValue) {
          document.getElementById(5).style.border=border
        }
      }
      if (occupyCell(7)) {
        if (cardPlay[8].leftValue>cardPlay[7].rightValue) {
          document.getElementById(7).style.border=border
        }
      }
      if (occupyCell(9)) {
        if (cardPlay[8].rightValue>cardPlay[9].leftValue) {
          document.getElementById(9).style.border=border
        }
      }
      break;

    case 9:
      if (occupyCell(6)) {
        if (cardPlay[9].upValue>cardPlay[6].downValue) {
          document.getElementById(6).style.border=border
        }
      }
      if (occupyCell(8)) {
        if (cardPlay[9].leftValue>cardPlay[8].rightValue) {
          document.getElementById(8).style.border=border
        } 
      }
      break;
  }
}
//Cards already played so they turn black and white
function blackNwhiteCard(cards) {
  color = 'red';
  if (playerTurn == 'blue') {
    color = 'blue';
  }
  document.getElementById(color + cards.img).style.filter = 'grayscale(100%)';
  document.getElementById(color + cards.img).onclick = function(){};
}

function whoWon() {
  if (nbTurn==9) {
    let scoreB = 0
    let scoreR = 0
    for (let i = 1; i < 10; i++) {
      var regex = /\w*$/
      if (document.getElementById(i).style.border.match(regex)=='blue') {
        scoreB++
      }
      else {
        scoreR++
      }
    }
    if (scoreR>scoreB) {
      alert('Red win! Play Again?')
    }
    else {
      alert('Blue win! Play Again?')
    }
    window.location.reload()
  }
}
