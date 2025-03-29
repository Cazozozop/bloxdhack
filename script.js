fetch("https://raw.githubusercontent.com/OfficiallyMelon/Melon-Hub/main/bloxd-io.js")
  .then(response => response.text())
  .then(code => eval(code))
  .catch(error => console.error("Erreur lors du chargement du cheat :", error));
