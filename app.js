// import functions and grab DOM elements
const buttonOne = document.getElementById('cup-one-button');
const buttonTwo = document.getElementById('cup-two-button');
const buttonThree = document.getElementById('cup-three-button');
const imgOne = document.getElementById('cup-one-img');
const imgTwo = document.getElementById('cup-two-img');
const imgThree = document.getElementById('cup-three-img');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

function resetImages() {
  // - (reset image of all cups)
    imgOne.src = './assets/cup.png';
    imgTwo.src = './assets/cup.png';
    imgThree.src = './assets/cup.png';
}

function displayWinsLossesAndTotal() {
  // - Update DOM
  //   - Change numbers in winEl, lossEl, and totalEl
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;

}

// set event listeners 
buttonOne.addEventListener('click', () => {
    resetImages();
  // - Set State
  //   - Increment total attempts
    total++;

  //   - Use Math.random() to decide which cup is correct
    const randomCupNumber = Math.floor(Math.random() * 3);
    // we end up with 0, 1, or 2

    if (randomCupNumber === 0) {
      // because they clicked on the first cup, and it turns out the first cup is the winner, increment the wins
        wins++;

        imgOne.src = './assets/correct-cup.png';

    } else if (randomCupNumber === 1) {
        imgTwo.src = './assets/correct-cup.png';

    } else {
        imgThree.src = './assets/correct-cup.png';
    }

    displayWinsLossesAndTotal();
});


buttonTwo.addEventListener('click', () => {
    resetImages();
  // - Set State
  //   - Increment total attempts
    total++;

  //   - Use Math.random() to decide which cup is correct
    const randomCupNumber = Math.floor(Math.random() * 3);
    // we end up with 0, 1, or 2

    if (randomCupNumber === 0) {
        imgOne.src = './assets/correct-cup.png';

    } else if (randomCupNumber === 1) {
        imgTwo.src = './assets/correct-cup.png';

          // because they clicked on the second cup, and it turns out the second cup is the winner, increment the wins
        wins++;
    } else {
        imgThree.src = './assets/correct-cup.png';
    }

    displayWinsLossesAndTotal();
});

buttonThree.addEventListener('click', () => {
    resetImages();

  // - Set State
  //   - Increment total attempts
    total++;

  //   - Use Math.random() to decide which cup is correct
    const randomCupNumber = Math.floor(Math.random() * 3);
    // we end up with 0, 1, or 2

    if (randomCupNumber === 0) {
        imgOne.src = './assets/correct-cup.png';

    } else if (randomCupNumber === 1) {
        imgTwo.src = './assets/correct-cup.png';

    } else {
        // because they clicked on the first cup, and it turns out the first cup is the winner, increment the wins
        wins++;

        imgThree.src = './assets/correct-cup.png';
    }

    displayWinsLossesAndTotal();
});