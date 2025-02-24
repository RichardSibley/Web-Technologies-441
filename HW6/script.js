document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("playerData");
    let playerData = storedData ? JSON.parse(storedData) : null;
  
    // Handle player info form submission
    const playerForm = document.getElementById("playerForm");
    if (playerForm) {
      playerForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const age = document.getElementById("age").value.trim();
  
        playerData = {
          firstName,
          lastName,
          age,
          attempts: 0
        };
  
        localStorage.setItem("playerData", JSON.stringify(playerData));
        window.location.href = "game.html";
      });
    }
  
    // Display player name and attempts on game.html
    if (playerData && document.getElementById("welcomeMessage")) {
      document.getElementById("welcomeMessage").textContent = 
        `Welcome, ${playerData.firstName}! Ready to play?`;
      document.getElementById("attempts").textContent = playerData.attempts;
    }
  
    // Array of local images
    const images = ["Image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png", "Image6.png"];
    let gameImages = [...images, ...images]; // Duplicate images for pairs
    gameImages.sort(() => Math.random() - 0.5); // Shuffle images
  
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchesFound = 0;
  
    const gameContainer = document.getElementById("gameContainer");
  
    if (gameContainer) {
      gameImages.forEach((img, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = img;
        card.dataset.index = index;
        
        // Create image element
        const imgElement = document.createElement("img");
        imgElement.src = `./Images/${img}`;
        imgElement.alt = "Game Image";
  
        card.appendChild(imgElement);
        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
      });
    }
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add("flipped");
  
      if (!firstCard) {
        firstCard = this;
        return;
      }
  
      secondCard = this;
      lockBoard = true;
  
      // Increment attempts
      playerData.attempts++;
      document.getElementById("attempts").textContent = playerData.attempts;
      localStorage.setItem("playerData", JSON.stringify(playerData));
  
      if (firstCard.dataset.image === secondCard.dataset.image) {
        matchesFound++;
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
  
        if (matchesFound === images.length) {
          setTimeout(() => window.location.href = "final.html", 1000);
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          resetBoard();
        }, 1000);
      }
    }
  
    function resetBoard() {
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }
  });
  