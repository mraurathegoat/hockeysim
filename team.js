document.addEventListener("DOMContentLoaded", () => {
// Teams array
const teams = [
  { name: "Pittsburgh Penguins", file: "PittsburghPenguins" },
  { name: "Boston Bruins", file: "BostonBruins" },
  { name: "Toronto Maple Leafs", file: "TorontoMapleLeafs" }
];

// Get selected team index from localStorage
let currentIndex = localStorage.getItem("selectedTeamIndex");

if (currentIndex === null) {
    currentIndex = 0; // default to first team
} else {
    currentIndex = parseInt(currentIndex);
}

// Access the team safely
const team = teams[currentIndex];

// Update Team Overview page
document.getElementById("teamTitle").textContent = team.name;
document.getElementById("teamLogo").src = team.file + ".png";

// Example click for Players box
const playersBox = document.getElementById("playersBox");
playersBox.addEventListener("click", () => {
    localStorage.setItem("selectedTeamIndex", currentIndex);
    localStorage.setItem("playerPageType", "lineups");
    window.location.href = "players.html";
});
});  
