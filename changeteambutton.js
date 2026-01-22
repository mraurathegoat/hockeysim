const teamNames = [
    'AnaheimDucks', 'BostonBruins', 'BuffaloSabres', 'CalgaryFlames', 'CarolinaHurricanes',
    'ChicagoBlackhawks', 'ColoradoAvalanche', 'ColumbusBlueJackets', 'DallasStars', 'DetroitRedWings',
    'EdmontonOilers', 'FloridaPanthers', 'LosAngelesKings', 'MinnesotaWild', 'MontrealCanadiens',
    'NewJerseyDevils', 'NewYorkIslanders', 'NewYorkRangers', 'OttawaSenators', 'PhiladelphiaFlyers',
    'PittsburghPenguins', 'SanJoseSharks', 'SeattleKraken', 'StLouisBlues', 'TampaBayLightning',
    'TorontoMapleLeafs', 'UtahMammoth', 'VancouverCanucks', 'VegasGoldenKnights', 'WashingtonCapitals',
    'WinnipegJets'
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= teamNames.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = teamNames.length - 1;
    }

    const teamImage = document.getElementById('teamImage');
    const newImageSrc = teamNames[currentIndex] + '.png';
    teamImage.src = newImageSrc;
    teamImage.alt = teamNames[currentIndex] + ' logo';
}
