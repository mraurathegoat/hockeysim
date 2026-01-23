// Example teams with players, scratches, and transfers
const teams = [
  {
    name: "Pittsburgh Penguins",
    players: ["Noel Acciari", "Justin Brazeau", "Egor Chinakhov", "Sidney Crosby", "Connor Dewar", "Filip Hallander", "Kevin Hayes", "Ben Kindel", "Blake Lizotte", "Evgeni Malkin", "Anthony Mantha", "Tommy Novak", "Rickard Rakell", "Bryan Rust", "Connor Clifton", "Ryan Graves", "Erik Karlsson", "Brett Kulak", "Kris Letang", "Ryan Shea", "Ilya Solovyov", "Jack St. Ivany", "Parker Wotherspoon", "Arturs Silovs", "Stuart Skinner"],
    scratches: ["Kris Letang", "Ryan Graves"],
    transfers: []
  },
  {
    name: "Boston Bruins",
    players: ["Brad Marchand", "Patrice Bergeron", "David Pastrnak"],
    scratches: ["Player C"],
    transfers: ["Player Z in"]
  },
  {
    name: "Toronto Maple Leafs",
    players: ["Auston Matthews", "Mitch Marner", "William Nylander"],
    scratches: ["Player D"],
    transfers: ["Player W out"]
  }
  // Add other teams as needed
];

// Load selected team from localStorage
const index = localStorage.getItem("selectedTeamIndex");
if (index === null) {
    // No team selected, go back to main menu
    window.location.href = "index.html";
}

const team = teams[index];

// Update the team title
document.getElementById("teamTitle").textContent = team.name;

// Attach click events to boxes
document.getElementById("lineupsBox").addEventListener("click", () => {
    localStorage.setItem("playerPageType", "lineups");
    window.location.href = "player-detail.html";
});

document.getElementById("scratchesBox").addEventListener("click", () => {
    localStorage.setItem("playerPageType", "scratches");
    window.location.href = "player-detail.html";
});

document.getElementById("transfersBox").addEventListener("click", () => {
    localStorage.setItem("playerPageType", "transfers");
    window.location.href = "player-detail.html";
});

// Back button goes back to team overview
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "team.html";
});
