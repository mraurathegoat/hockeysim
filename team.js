document.addEventListener("DOMContentLoaded", () => {

    // 1️⃣ Teams array
    const teams = [
        { name: "Pittsburgh Penguins", file: "PittsburghPenguins" },
        { name: "Boston Bruins", file: "BostonBruins" },
        { name: "Toronto Maple Leafs", file: "TorontoMapleLeafs" }
        // Add other teams here
    ];

    // 2️⃣ Get selected team index safely
    let currentIndex = parseInt(localStorage.getItem("selectedTeamIndex"), 10);
    if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= teams.length) {
        currentIndex = 0; // fallback to first team
    }

    // 3️⃣ Access the selected team
    const team = teams[currentIndex]; // Declare team only once

    // 4️⃣ Update Team Overview page
    const teamTitle = document.getElementById("teamTitle");
    if (teamTitle) teamTitle.textContent = team.name;

    // Optional: Update logo if you have <img id="teamLogo">
    // const teamLogo = document.getElementById("teamLogo");
    // if (teamLogo) teamLogo.src = team.file + ".png";

    // 5️⃣ Update placeholders for next game, standings, schedule
    const nextGame = document.getElementById("nextGame");
    if (nextGame) nextGame.textContent = "Next game vs TBD";

    const standings = document.getElementById("standings");
    if (standings) standings.textContent = "Standings will appear here";

    const schedule = document.getElementById("schedule");
    if (schedule) schedule.textContent = "Schedule will appear here";

    // 6️⃣ Players box click
    const playersBox = document.getElementById("playersBox");
    if (playersBox) {
        playersBox.addEventListener("click", () => {
            localStorage.setItem("selectedTeamIndex", currentIndex);
            localStorage.setItem("playerPageType", "lineups"); // default view
            window.location.href = "players.html";
        });
    }

});
