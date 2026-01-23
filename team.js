const teams = [
  {
    name: "Anaheim Ducks",
    file: "AnaheimDucks",
    conference: "Western",
    division: "Pacific",
    rating: 82
  },
  {
    name: "Boston Bruins",
    file: "BostonBruins",
    conference: "Eastern",
    division: "Atlantic",
    rating: 90
  },
  // add rest later
];

const index = localStorage.getItem("selectedTeamIndex");

if (index === null) {
  window.location.href = "index.html";
}

const team = teams[index];

document.getElementById("teamTitle").textContent = team.name;
document.getElementById("teamLogo").src = team.file + ".png";
document.getElementById("conference").textContent = team.conference;
document.getElementById("division").textContent = team.division;
document.getElementById("rating").textContent = team.rating;

function goBack() {
  window.location.href = "index.html";
}

document.getElementById("nextGame").textContent =
  "vs Boston Bruins — Oct 12";

document.getElementById("standings").textContent =
  "3rd in Atlantic (8-4-1)";

document.getElementById("schedule").textContent =
  "Oct 12 vs BOS\nOct 14 @ NYR\nOct 16 vs TOR";

const playersBox = document.getElementById("playersBox");

playersBox.addEventListener("click", () => {
    // Save which team is currently selected
    localStorage.setItem("selectedTeamIndex", currentIndex);

    // Optional: specify the type if needed
    localStorage.setItem("playerPageType", "lineups"); // default view

    // Go to the players page
    window.location.href = "players.html";
});


