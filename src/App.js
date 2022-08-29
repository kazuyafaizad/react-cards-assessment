import logo from "./logo.svg";
import Input from "./Input";
import Button from "./Button";
import "./App.css";

function App() {
  let cardDeck = [];
  // Spade = S, Heart = H, Diamond = D, Club = C
  const pips = ["S", "H", "D", "C"];

  // Card 2 to 9 are, as it is, 1=A,10=X,11=J,12=Q,13=K
  const number = ["A", "2", "3", 4, 5, 6, 7, 8, 9, "X", "J", "Q", "K"];

  const generateCardDeck = () => {
    cardDeck = pips
      .map((card) => {
        return number.map((n) => {
          return `${card}-${n}`;
        });
      })
      .flat();
  };

  generateCardDeck();

  const randomPlayer = (max) => {
    return Math.floor(Math.random() * max);
  };

  const createPlayers = (numberOfPlayers) => {
    let players = [];
    for (let i = 0; i < Number(numberOfPlayers); i++) {
      players[i] = [];
    }
    return players;
  };

  const distributeCard = (event) => {
    event.preventDefault();

    let numberOfPlayers = document.querySelector("#player-input").value;

    if (numberOfPlayers <= 0 || numberOfPlayers === "") {
      document.querySelector("#error").innerHTML = "Input value does not exist or value is invalid";
      document.querySelector("#result").innerText = "";
      document.querySelector("#play-btn").disabled = true;
    } else {
      document.querySelector("#error").innerHTML = "";
      document.querySelector("#play-btn").disabled = false;
    }

    let players = createPlayers(numberOfPlayers);

    cardDeck.forEach((card) => {
      players[randomPlayer(Number(numberOfPlayers))].push(card);
    });

    document.querySelector("#result").innerText = players.join("\r");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Programming Assessment A by Norfaizad</h1>
        <p>Please enter number of player</p>
        <p id="error"></p>
        <Input
          id="player-input"
          type="number"
          onChange={(event) => {
            if (event.target.value) {
              document.querySelector("#error").innerHTML = "";
              document.querySelector("#play-btn").disabled = false;
            }
          }}
        />
        <Button id="play-btn" className="btn-lg btn-primary my-5" onClick={distributeCard}>
          DISTRIBUTE CARD
        </Button>
        <h3>Result below</h3>
        <pre id="result" className="w-100 text-start px-4 bg-success"></pre>
      </header>
    </div>
  );
}

export default App;
