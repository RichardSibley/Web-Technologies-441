window.onload = function() {
    document.getElementById("buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            choosePath(event.target.getAttribute("onclick").match(/'([^']+)'/)[1]);
        }
    });
};

function choosePath(choice) {
    let storyText = document.getElementById("story");
    let storyImage = document.getElementById("story-image");
    let buttons = document.getElementById("buttons");

    if (!storyText || !storyImage || !buttons) return;

    if (choice === 'forest') {
        storyText.innerHTML = "You venture into the darkened forest. You hear growling and see movement ahead of you down the path. Do you follow it or turn back?";
        storyImage.src = "Images/forest.png";
        buttons.innerHTML = '<button onclick="choosePath(\'growling\')">Follow the Sounds</button>' +
                           '<button onclick="choosePath(\'tiger\')">Turn Back</button>';
    } else if (choice === 'plains') {
        storyText.innerHTML = "You begin to ford the river. There is movement in the water ahead. Something is swimming your way! Do you turn back or swim for it?";
        storyImage.src = "Images/river.png";
        buttons.innerHTML = '<button onclick="choosePath(\'swim\')">Swim for it!</button>' +
                           '<button onclick="choosePath(\'turnback\')">Turn Back for a different path</button>';
    } else if (choice === 'river') {
        storyText.innerHTML = "You quickly assemble a raft and make your way down the river. As you round a bend you hear what sounds like rapids ahead. Do you brave the rapids or put to shore to find a different way?";
        storyImage.src = "Images/rapids.png";
        buttons.innerHTML = '<button onclick="choosePath(\'rapids\')">Brave the Rapids</button>' +
                           '<button onclick="choosePath(\'shore\')">Put to Shore</button>';
    } else if (choice === 'growling') {
        storyText.innerHTML = "A ranger and their wolf companion meet you on the trail. They guide you to civilization! Congratulations! You Survived!";
        storyImage.src = "Images/growling.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    } else if (choice === 'tiger') {
        storyText.innerHTML = "A roaring tiger leaps from the shadows to strike at you! Unfortunately you didn't survive. Try again!";
        storyImage.src = "Images/tiger.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    } else if (choice === 'swim') {
        storyText.innerHTML = "You swim for shore only to be met by an alligator in the water! Unfortunately you didn't survive! Try again!";
        storyImage.src = "Images/gator.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    } else if (choice === 'turnback') {
        storyText.innerHTML = "You turn back to choose a different way to continue on your journey. As you exit the river an alligator swims by in the water! That was a close one. Try a new route!";
        storyImage.src = "Images/gatorswim.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    } else if (choice === 'rapids') {
        storyText.innerHTML = "You hold on tight as you round the bend. The water is churning but there in no waterfall. You manage to hold on to the raft and make it through the rapids! Civilization awaits! You Survived!";
        storyImage.src = "Images/braverapids.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    } else if (choice === 'shore') {
        storyText.innerHTML = "You navigate your raft to shore. As you pull it up on the river bank you are surprised by sounds behind you. Oh no! Cannibals! Unfortunately you are taken and eaten. Try again for a different ending!";
        storyImage.src = "Images/cannibals.png";
        buttons.innerHTML = '<button onclick="location.reload()">Restart Adventure</button>';
    }
}
