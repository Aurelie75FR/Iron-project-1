function game() {
  deckOne = createDeck(); //blue
  deckTwo = createDeck(); //red

  let blue = "blue";
  let red = "red";
  let divDeck = "";
  //loop throught an array of cards to build a deck
  for (let i = 0; i < 5; i++) {
    divDeck +='<img id="blue'+deckOne[i].img+'" onclick="select('+i+','+0 +')" src="' +deckOne[i].img+'" />';
      // `<img id="blue" onclick="select(${i}, ${+0}) src="${deckOne[i].img}"/>`;
    console.log(divDeck);
  }
  //display the deck
  document.getElementById("deckOne").innerHTML = divDeck;
  divDeck = "";
  for (let i = 0; i < 5; i++) {
    divDeck +='<img id ="red'+deckTwo[i].img+'"onclick="select('+i+","+0+')"src="'+deckTwo[i].img+'"/>';
    console.log(divDeck);
  }
  document.getElementById("deckTwo").innerHTML = divDeck;
}
//function radomize the deck
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

  return deck;
}

//In-game part i is a random card and team could be player or the infamous 'toto'
function select(i, team) {
  if (team === 1) {
    if (turn === "red") {
      redCard = deckTwo[i];
      document.getElementById("cardSelect").innerHTML =
        'card selected : <img src="' + redCard.img + '" />';
    } else {
      alert("That's not your deck !");
    }
  } else {
    if (turn === "blue") {
      blueCard = deckOne[i];
      document.getElementById("cardSelect").innerHTML =
        'card selected : <img src="' + blueCard.img + '"/>';
    } else {
      alert("That's not your deck !");
    }
  }
}
// the fun part : the card placement
function cardsPlacement(nb) {
  if (placement === "blue") {
    if (turn === "blue") {
      if (typeof blueCard === "undefined") {
        alert("You didn't select any card !");
      } else {
        document.getElementById(nb).src = blueCard.img;
        document.getElementById(nb).style.border = '10px solid "#49D4DB';
        document.getElementById(nb).style.borderRadius = "12px";
        blackNwhitecard(blueCard);
        cardPlay[nb] = blueCard;
        endOfTurn(nb);
        document.getElementById("nextTurn").innerHTML =
          'Red turn : <font class="teamRed">Red</font>';
        blueCard = undefined;
        playerTurn = "red";
      }
    } else {
      if (typeof (redCard === "undefined")) {
        alert("you didn't select any card !");
      } else {
        document.getElementById(nb).src = redCard.img;
        document.getElementById(nb).style.border = '10px solid "#EC201A';
        document.getElementById(nb).style.borderRadius = "12px";
        blackNwhitecard(redCard);
        cardPlay[nb] = redCard;
        endOfTurn(nb);
        document.getElementById("nextTurn").innerHTML =
          'Blue turn : <font class="teamBlue">Blue</font>';
        redCard = undefined;
        playerTurn = "blue";
      }
    }
  } else {
    alert("A card is already place here!");
  }
}

function endOfTurn(nb) {
  turnVerification(nb);
  document.getElementById("cardSelect").innerHTML =
    'Pick a card <img src="img/back.png">';
  nbTurn++;
  whoWon();
}
//Behold people! Here we are with Regex
function empty(nb) {
  let regex = /\w*.png/; //<-- from MDN it's replace() String x name of the card the player pick
  if (document.getElementById(nb).src.match(regex) === "back.png") {
    return true;
  } else {
    return false;
  }
}

function occupy(nb) {
  let regex = /\w*.png/;
  if (document.getElementById(nb).src.match(regex) != "back.png") {
    return true;
  } else {
    return false;
  }
}

function turnVerification(nb) {
  let color = "red";
  if (turn === "blue") {
    color = "#49D4DB";
  }
  //let's compare cards value on the grid
  let border = "10px solid " + color;
  switch (nb) {
    case 1: //<-- corner up left
      if (occupy(2)) {
        if (cardPlay[1].rightValue > cardPlay[2].leftValue) {
          document.getElementById(2).style.border = border;
        }
      }
      if (occupy(4)) {
        if (cardPlay[1].downValue > cardPlay[4].upValue) {
          document.getElementById(4).style.border = border;
        }
      }
      break;

    case 2: // <-- up middle
      if (occupy(1)) {
        if (cardPlay[2].leftValue > cardPlay[1].rightValue) {
          document.getElementById(1).style.border = border;
        }
      }
      if (occupy(3)) {
        if (cardPlay[2].rightValue > cardPlay[3].leftValue) {
          document.getElementById(3).style.border = border;
        }
      }
      if (occupy(5)) {
        if (cardPlay[2].downValue > cardPlay[5].upValue) {
          document.getElementById(5).style.border = border;
        }
      }
      break;

    case 3: //<-- corner up right
      if (occupy(2)) {
        if (cardPlay[3].leftValue > cardPlay[2].rightValue) {
          document.getElementById(2).style.border = border;
        }
      }
      if (occupy(6)) {
        if (cardPlay[3].downValue > cardPlay[6].upValue) {
          document.getElementById(6).style.border = border;
        }
      }
      break;

    case 4: //<-- middle left
      if (occupy(1)) {
        if (cardPlay[4].upValue > cardsPlay[1].downValue) {
          document.getElementById(1).style.border = border;
        }
      }
      if (occupy(5)) {
        if (cardsPlay[4].rightValue > cardPlay[5].leftValue) {
          document.getElementById(5).style.border = border;
        }
      }
      if (occupy(7)) {
        if (cardPlay[4].downValue > cardPlay[7].upValue) {
          document.getElementById(7).style.border = border;
        }
      }
      break;

    case 5: //<-- middle
      if (occupy(2)) {
        if (cardPlay[5].upValue > cardPlay[2].downValue) {
          document.getElementById(2).style.border = border;
        }
      }
      if (occupy(4)) {
        if (cardPlay[5].leftValue > cardPlay[4].rightValue) {
          document.getElementById(4).style.border = border;
        }
      }
      if (occupy(6)) {
        if (cardPlay[5].rightValue > cardPlay[6].leftValue) {
          document.getElementById(6).style.border = border;
        }
      }
      if (occupy(8)) {
        if (cardPlay[5].downValue > cardPlay[8].upValue) {
          document.getElementById(8).style.border = border;
        }
      }

    case 6: //<-- middle right
      if (occupy(3)) {
        if (cardPlay[6].upValue > cardPlay[3].downValue) {
          document.getElementById(3).style.border = border;
        }
      }
      if (occupy(5)) {
        if (cardPlay[6].leftValue > cardPlay[5].rightValue) {
          document.getElementById(5).style.border = border;
        }
      }
      if (occupy(9)) {
        if (cardPlay[6].downValue > cardPlay[9].upValue) {
          document.getElementById(9).style.border = border;
        }
      }
      break;
    case 7: //<-- corner down left
      if (occupy(4)) {
        if (cardPlay[7].upValue > cardPlay[4].downValue) {
          document.getElementById(4).style.border = border;
        }
      }
      if (occupy(8)) {
        if (cardPlay[7].rightValue > cardPlay[8].leftValue) {
          document.getElementById(8).style.border = border;
        }
      }
      break;

    case 8: //<-- down middle
      if (occupy(5)) {
        if (cardPlay[8].upValue > cardPlay[5].downValue) {
          document.getElementById(5).style.border = border;
        }
      }
      if (occupy(7)) {
        if (cardPlay[8].leftValue > cardPlay[7].rightValue) {
          document.getElementById(7).style.border = border;
        }
      }
      if (occupy(9)) {
        if (cardPlay[8].rightValue > cardPlay[9].leftValue) {
          document.getElementById(9).style.border = border;
        }
      }
      break;

    case 9:
      if (occupy(6)) {
        if (cardPlay[9].upValue > cardPlay[6].downValue) {
          document.getElementById(6).style.border = border;
        }
      }
      if (occupy(8)) {
        if (cardPlay[9].leftValue > cardPlay[8].rightValue) {
          document.getElementById(8).style.border = border;
        }
      }
      break;
  }
}
//lost card so they turn black and white
function blackNwhitecard(card) {
  color = "red";
  if (turn === "blue") {
    color = "blue";
  }
  document.getElementById(color + card.img).style.filter = "grayscale(100%)";
  document.getElementById(color + card.img).onclick = function () {};
}

function whoWon() {
  if (turn === 9) {
    let scoreB = 0;
    let scoreR = 0;
    for (let i = 0; i < 10; i++) {
      let regex = /\w*$/; //any word character to the end of a string(global search)
      if (document.getElementById(i).style.border.match(regex) == "blue") {
        scoreB++;
      } else {
        scoreR++;
      }
    }
    if (scoreB > scoreR) {
      alert("Congrats!!Blue win! Play Again ?");
    } else {
      alert("Congrats!! Red win! Play Again ?");
    }
    window.location.reload();
  }
}
