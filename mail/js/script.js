// Test
// alert("Ciao");

// Raccolta dati

//  Button
const verifyBtn = document.querySelector(".verify-btn");
//  INDICE MAIL
const email = [
  "user1@email.com",
  "user2@email.com",
  "user3@email.com",
  "user4@email.com",
  "user5@email.com",
  "user6@email.com",
]; // array
console.log(email);

// Gestore del click
verifyBtn.addEventListener("click", function () {
  //  Selezione il valore contenuto all'interno dellìinput
  const textSpace = document.getElementById("text-space").value; //string | null
  console.log(textSpace);

  //  Variabile che di base è false
  let emailTrue = false;

  //  Ciclo for per controllo email
  for (let i = 0; i < email.length; i++) {
    if (textSpace === email[i]) {
      emailTrue = true;
    }
  }

  //  Assegno variabile al messaggio che verrà stampato con il condizionale
  let message;
  if (emailTrue) {
    message = "L'email inserita è corretta.";
  } else {
    message = "L'email inserita non è corretta.";
  }
  console.log(emailTrue); //  false | true

  // Seleziono il div per la stampa
  const resultSearch = document.getElementById("result_verify");

  // Stampo il contenuto in pagina
  resultSearch.innerHTML = message;
});
