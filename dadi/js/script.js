// test
// alert("Ciao");

// Seleziono gli elementi dall'HTML
// Raccolta Dati:
// Immagini e bottone
const lancioDadiBtn = document.getElementById("generate");
let resultDado1 = document.getElementById("dado-user");
let resultDado2 = document.getElementById("dado-computer");

// Aggiungo la logica al pulsante
lancioDadiBtn.addEventListener("click", function () {
  // Genero i numeri casuali da 1 a 6 ai due dadi
  let dadoUser = Math.floor(Math.random() * 6) + 1;
  console.log(dadoUser, typeof dadoUser);

  let dadoComputer = Math.floor(Math.random() * 6) + 1;
  console.log(dadoComputer, typeof dadoComputer);

  // Stampo immagine dei dadi
  resultDado1.innerHTML = `<img src="./img/${dadoUser}_black.png" alt="">`;
  resultDado2.innerHTML = `<img src="./img/${dadoComputer}_red.png" alt="">`;

  // Determinare il vincitore con condizione
  let winner;
  if (dadoUser > dadoComputer) {
    winner = "Hai vinto contro il computer!";
  } else if (dadoUser < dadoComputer) {
    winner = "Putroppo hai perso contro il computer!";
  } else {
    winner = "Avete pareggiato!";
  }

  // Raccolta Dati
  // Risultati
  let winnerGame = document.getElementById("winner");
  let resultComputer = document.getElementById("computer");
  let resultUser = document.getElementById("user");

  winnerGame.innerHTML = `Vincitore: ${winner}`;
  resultComputer.innerHTML = `Dado PC: ${dadoComputer}`;
  resultUser.innerHTML = `Dado User: ${dadoUser}`;
});

// Determinare il vincitore con condizione
