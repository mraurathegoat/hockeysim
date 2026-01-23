console.log("changeteambutton.js loaded");
const teams = [
  { name: "Anaheim Ducks", file: "AnaheimDucks" },
  { name: "Boston Bruins", file: "BostonBruins" },
  { name: "Buffalo Sabres", file: "BuffaloSabres" },
  { name: "Calgary Flames", file: "CalgaryFlames" },
  { name: "Carolina Hurricanes", file: "CarolinaHurricanes" },
  { name: "Chicago Blackhawks", file: "ChicagoBlackhawks" },
  { name: "Colorado Avalanche", file: "ColoradoAvalanche" },
  { name: "Columbus Blue Jackets", file: "ColumbusBlueJackets" },
  { name: "Dallas Stars", file: "DallasStars" },
  { name: "Detroit Red Wings", file: "DetroitRedWings" },
  { name: "Edmonton Oilers", file: "EdmontonOilers" },
  { name: "Florida Panthers", file: "FloridaPanthers" },
  { name: "Los Angeles Kings", file: "LosAngelesKings" },
  { name: "Minnesota Wild", file: "MinnesotaWild" },
  { name: "Montreal Canadiens", file: "MontrealCanadiens" },
  { name: "New Jersey Devils", file: "NewJerseyDevils" },
  { name: "New York Islanders", file: "NewYorkIslanders" },
  { name: "New York Rangers", file: "NewYorkRangers" },
  { name: "Ottawa Senators", file: "OttawaSenators" },
  { name: "Philadelphia Flyers", file: "PhiladelphiaFlyers" },
  { name: "Pittsburgh Penguins", file: "PittsburghPenguins" },
  { name: "San Jose Sharks", file: "SanJoseSharks" },
  { name: "Seattle Kraken", file: "SeattleKraken" },
  { name: "St. Louis Blues", file: "StLouisBlues" },
  { name: "Tampa Bay Lightning", file: "TampaBayLightning" },
  { name: "Toronto Maple Leafs", file: "TorontoMapleLeafs" },
  { name: "Utah Mammoth", file: "UtahMammoth" },
  { name: "Vancouver Canucks", file: "VancouverCanucks" },
  { name: "Vegas Golden Knights", file: "VegasGoldenKnights" },
  { name: "Washington Capitals", file: "WashingtonCapitals" },
  { name: "Winnipeg Jets", file: "WinnipegJets" }
];

let currentIndex = 0;

// INITIALIZE PAGE
const teamImage = document.getElementById("teamImage");
const teamName = document.getElementById("teamName");

// UPDATE IMAGE & TEXT
function updateTeam() {
    teamImage.src = teams[currentIndex].file + ".png";
    teamName.textContent = teams[currentIndex].name;
}

// BUTTONS
document.getElementById("backBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teams.length) % teams.length;
    updateTeam();
});

document.getElementById("fwdBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teams.length;
    updateTeam();
});

// PLAY GAME BUTTON
document.getElementById("playBtn").addEventListener("click", () => {
    console.log("Play Game clicked!"); // test
    localStorage.setItem("selectedTeamIndex", currentIndex);
    window.location.href = "team.html";
});

// INITIAL DISPLAY
updateTeam();
