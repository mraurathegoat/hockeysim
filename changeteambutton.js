// script.js

// List of image file names (add quotes around each name!)
const images = [
    'AnaheimDucks.png', 'BostonBruins.png', 'BuffaloSabres.png',
    'CalgaryFlames.png', 'CarolinaHurricanes.png', 'ChicagoBlackhawks.png',
    'ColoradoAvalanche.png', 'ColumbusBlueJackets.png', 'DallasStars.png',
    'DetroitRedWings.png', 'EdmontonOilers.png', 'FloridaPanthers.png',
    'LosAngelesKings.png', 'MinnesotaWild.png', 'MontrealCanadiens.png',
    'NewJerseyDevils.png', 'NewYorkIslanders.png', 'NewYorkRangers.png',
    'OttawaSenators.png', 'PhiladelphiaFlyers.png', 'PittsburghPenguins.png',
    'SanJoseSharks.png', 'SeattleKraken.png', 'StLouisBlues.png',
    'TampaBayLightning.png', 'TorontoMapleLeafs.png', 'UtahMammoth.png',
    'VancouverCanucks.png', 'VegasGoldenKnights.png', 'WashingtonCapitals.png',
    'WinnipegJets.png'
];

let currentIndex = 0;

// Get references to the HTML elements (use the actual IDs from your HTML)
const myImage = document.getElementById('myImage'); // Corrected: pass ID as string
const backBtn = document.getElementById('backBtn');   // Corrected: pass ID as string
const fwdBtn = document.getElementById('fwdBtn');     // Corrected: pass ID as string

// Function to update the displayed image
function updateImage() {
    myImage.src = images[currentIndex];
}

// Event listener for the Forward button (changed function name for clarity)
fwdBtn.addEventListener('click', function() { // Corrected: Added event listener
    currentIndex = (currentIndex + 1)
    updateImage();
});

// Event listener for the Backward button (changed function name for clarity)
backBtn.addEventListener('click', function() { // Corrected: Added event listener
    currentIndex = (currentIndex - 1)
    updateImage();
});

// Initialize with the first image
updateImage();
