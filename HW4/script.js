let currentPrompt = "";

const storyChoices = {
    start: {
        prompt: "You are the intrepid explorer Avery Stone and you have crash landed in an unfamiliar land! You take a moment to get your bearings and notice that you have 3 places you can go that lead to civilization. You landed at the edge of a darkened jungle that is seperated from open plains by a quick running river. You can cut through the darkened forest, build a raft to face the river, or ford the river to cross the plains.  Type your choice below: 'jungle', 'raft', or 'ford'",
        image: "Images/CrashedShip.jpg",
        options: ["jungle", "raft", "ford"]
    },
   jungle: {
        prompt: "You venture into the darkened forest. You hear growling and see movement ahead of you down the path. Do you follow the sounds or run? Type your answer below: 'follow' or 'run'",
        image: "Images/DarkenedJungle.jpg",
        options: ["follow", "run"]
    },
    raft: {
        prompt: "You assemble a raft and make your way down the river. As you round a bend you hear what sounds like rapids ahead. Do you brave the rapids or put to shore to find a different way? Type your answer below: 'rapids' or 'shore'",
        image: "Images/Raft.jpg",
        options: ["rapids", "shore"]
    },
    ford: {
        prompt: "You begin to ford the river. There is movement in the water ahead. Something is swimming your way! Do you flee or swim for it? Type your answer below; 'flee' or 'swim'",
        image: "Images/Ripples.jpg",
        options: ["flee", "swim"]
    },
    follow: {
        prompt: "A ranger and their wolf companion meet you on the trail. They guide you to civilization! Congratulations! You Survived!",
        image: "Images/Ranger.jpg",
        options: []
    },
    run: {
        prompt: "A roaring tiger leaps from the shadows to strike at you! Unfortunately you didn't survive. Try again!",
        image: "Images/Tiger.jpg",
        options: []
    },
    rapids: {
        prompt: "You hold on tight as you round the bend. The water is churning but there in no waterfall. You manage to hold on to the raft and make it through the rapids! Civilization awaits! You Survived!",
        image: "Images/RiverTown.jpg",
        options: []
    },
    shore: {
        prompt: "You navigate your raft to shore. As you pull it up on the river bank you are surprised by sounds behind you. Oh no! Cannibals! Unfortunately you are taken and eaten. Try again for a different ending!",
        image: "Images/Roasted.jpg",
        options: []
    },
   flee: {
        prompt: "You turn back to choose a different way to continue on your journey. As you exit the river an alligator swims by in the water! That was a close one. Try a new route!",
        image: "Images/Croc.jpg",
        options: []
    },
    swim: {
        prompt: "You swim for the other riverbank only to be met by an alligator in the water! Unfortunately you didn't survive! Try again!",
        image: "Images/CrocAttack.jpg",
        options: []
    }
};

function startAdventure() {
    loadStory("start");
}

function restartAdventure() {
    location.reload(); 
}

function loadStory(choice) {
    const story = storyChoices[choice];
    currentPrompt = choice;

    if (!story) {
        alert("Something went wrong! Restarting...");
        restartAdventure();
        return;
    }

    document.getElementById("story").textContent = story.prompt;
    document.getElementById("story-image").src = story.image;

    if (story.options.length > 0) {
        document.getElementById("input-decision").style.display = "block";
        document.getElementById("decision-prompt").textContent = "Your decision:";
        document.getElementById("decision-input").value = ""; 
        document.getElementById("start-button").textContent = "Restart Your Journey"; 
    } else {
        document.getElementById("input-decision").style.display = "none";
        document.getElementById("decision-prompt").textContent = ""; 
        document.getElementById("start-button").textContent = "Restart Your Journey"; 
    }
}

function submitDecision() {
    let decision = document.getElementById("decision-input").value.toLowerCase();
    const validOptions = storyChoices[currentPrompt].options;

    while (!validOptions.includes(decision)) {
        alert(`Invalid choice! Please choose one of the following: ${validOptions.join(", ")}`);
        console.log("Invalid input received: " + decision);

        decision = prompt(`Enter your choice (${validOptions.join(", ")}):`).toLowerCase();

        if (!decision) {
            alert("No decision entered. Restarting...");
            location.reload();
            return;
        }
    }

    console.log(`Valid input received: ${decision}`);
    loadStory(decision);
}