function playGame() {
  const goalsFor = Math.floor(Math.random()*6);
  const goalsAgainst = Math.floor(Math.random()*6);

  let resultText=`You lost ${goalsFor}-${goalsAgainst}`;

  if (goalsFor>goalsAgainst){
      resultText=`You won ${goalsFor}-${goalsAgainst}!`;
  } else if (goalsFor === goalsAgainst) {
    resultText = `You tied ${goalsFor}-${goalsAgainst};
    }

  document.getElementById("result").textContent = resultText;
}
