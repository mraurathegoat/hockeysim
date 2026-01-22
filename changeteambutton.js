// script.js

// List of image file names
const images = ["AnaheimDucks.png", "BostonBruins.png", "BuffaloSabres.png", "CalgaryFlames.png", "CarolinaHurricanes.png", "ChicagoBlackhawks.png", "ColoradoAvalanche.png", "ColumbusBlueJackets.png", "DallasStars.png", "DetroitRedWings.png", "EdmontonOilers.png", "FloridaPanthers.png", "LosAngelesKings.png", "MinnesotaWild.png", "MontrealCanadiens.png", "NewJerseyDevils.png", "NewYorkIslanders.png", "NewYorkRangers.png", "OttawaSenators.png", "PhiladelphiaFlyers.png", "PittsburghPenguins.png", "SanJoseSharks.png", "SeattleKraken.png", "StLouisBlues.png", "TampaBayLightning.png", "TorontoMapleLeafs.png", "UtahMammoth.png", "VancouverCanucks.png", "VegasGoldenKnights.png", "WashingtonCapitals.png", "WinnipegJets.png"] ];
let currentIndex = 0;

// Get references to the HTML elements
const myImage = document.getElementById("myImage");
const backBtn = document.getElementById("backBtn");
const fwdBtn = document.getElementById("fwdBtn");

// Function to update the displayed image
function updateImage() {
    myImage.src = images[currentIndex];
}

// Event listener for the "Forward" button
fwdBtn.addEventListener("click", () => {
    // Increment index, looping back to 0 if at the end of the array
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Event listener for the "Backward" button
backBtn.addEventListener("click", () => {
    // Decrement index, looping to the last element if at the start
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Initialize with the first image
updateImage();
