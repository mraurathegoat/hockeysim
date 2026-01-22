// Array of NHL team names (filenames)
const teamNames = [
    'AnaheimDucks', 'BostonBruins', 'BuffaloSabres',
    'CalgaryFlames', 'CarolinaHurricanes', 'ChicagoBlackhawks',
    'ColoradoAvalanche', 'ColumbusBlueJackets', 'DallasStars',
    'DetroitRedWings', 'EdmontonOilers', 'FloridaPanthers',
    'LosAngelesKings', 'MinnesotaWild', 'MontrealCanadiens',
    'NewJerseyDevils', 'NewYorkIslanders', 'NewYorkRangers',
    'OttawaSenators', 'PhiladelphiaFlyers', 'PittsburghPenguins',
    'SanJoseSharks', 'SeattleKraken', 'StLouisBlues',
    'TampaBayLightning', 'TorontoMapleLeafs', 'UtahMammoth',
    'VancouverCanucks', 'VegasGoldenKnights', 'WashingtonCapitals',
    'WinnipegJets'
];

let currentIndex = 0; // Start with the first image

function changeImage(direction) {
    currentIndex += direction;

    // Wrap around logic for both ends of the array
    if (currentIndex >= teamNames.length) {
        currentIndex = 0; // Go to the first image
    } else if (currentIndex < 0) {
        currentIndex = teamNames.length - 1; // Go to the last image
    }

    // Get the image element by its ID
    const teamImage = document.getElementById('teamImage');
    
    // Construct the new image source path
    const newImageSrc = 'images/' + teamNames[currentIndex] + '.png';
    
    // Update the image source
    teamImage.src = newImageSrc;
    
    // Update alt text (optional, but good practice)
    teamImage.alt = teamNames[currentIndex] + ' logo';
}
