
const images = [
    "Images/Image1.png", "Images/Image2.png", "Images/Image3.png", "Images/Image4.png", "Images/Image5.png", "Images/Image6.png",
    "Images/Image1.png", "Images/Image2.png", "Images/Image3.png", "Images/Image4.png", "Images/Image5.png", "Images/Image6.png"
  ];
  
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
  }
  
  function renderGame() {
    shuffleArray(images); 
  
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; 
  
    for (let i = 0; i < 12; i++) {
      const blankImage = document.createElement('div');
      blankImage.classList.add('blank-image');
      
      blankImage.addEventListener('click', () => {
        blankImage.style.backgroundImage = `url(${images[i]})`;
      });
  
      gameContainer.appendChild(blankImage);
    }
  }
  
  renderGame();
  