document.addEventListener("DOMContentLoaded", () => {

    // 1️⃣ Teams array
    const teams = [
        { name: "Pittsburgh Penguins", file: "PittsburghPenguins" },
        { name: "Boston Bruins", file: "BostonBruins" },
        { name: "Toronto Maple Leafs", file: "TorontoMapleLeafs" }
        // Add other teams here
    ];

    // 2️⃣ Get selected team index from localStorage
    let currentIndex = localStorage.getItem("selectedTeamIndex");

    if (currentIndex === null) {
        currentIndex = 0; // fallback to first team
    } else {
        currentIndex = parseInt(currentIndex, 10);
    }

    // 3️⃣ Safety check
    if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= teams.length) {
        currentIndex = 0;
    }

    const team = teams[currentIndex];

    // 4️⃣ Update Team Overview page
    const teamTitle = document.getElementById("teamTitle");
    if (teamTitle) teamTitle.textContent = team.name;

    // Optional: Add a logo image if you have one
    // <img id="teamLogo" src="" alt="Team Logo">
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
            // Save current team index in case it changes later
            localStorage.setItem("selectedTeamIndex", currentIndex);
            localStorage.setItem("playerPageType", "lineups"); // default view
            window.location.href = "players.html";
        });
    }

});
