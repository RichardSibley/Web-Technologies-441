# Homework 2 Readme

## AI Reflection

This was a tough week. I struggled alot to try and make this webpage work. I spent an emberassing amount of time trying to understand loops and getting the boxes to work. AI came in handy this week much like it did last week. It has become a good tool to ask why something is or isn't working. So much so I feel like I'm starting to sound like a broken record. I compiled a list of the biggest helps it was to me this week and it is as follows:

1. It helped resolve a problem I was having with the "Restart Your Journey" button. It gave me ideas so it works seamlessly on all pages except the initial one. I was struggling having it either not even function or having it show on every page. I had it break down this function to help me understand what was happening.

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
It's explanation:
A. restart-button initially hidden:

    When the page loads, the restart button is hidden (style="display: none;").

B. Show after the first page:

    In the loadStory function, when the choice is "start", the restart button remains hidden.
    For all other choices, the restart button becomes visible (style.display = "inline-block";).

C. No changes to startAdventure:

    The startAdventure function still works the same way, loading the "start" story.

2. It suggested efficient ways to integrate loops by "ensuring user input validation with a while loop."(ChatGPT's wording there for clarity.) With it I learned how to integrate the Alert for entering in something that wasn't a suggested option, promting the user and repeating until the input was a valid choice. Sorry about the popup. >.<

3. Provided tips for making the game responsive and visually appealing across different devices.

I struggle with coding in general. I have found that being able to bounce things off of ChatGPT in regards to coding and partnering it with W3 Schools and stack exchange has been an aggresively functional set of tools to help me understand beyond the lectures and how to integrate things in my code. It allowed me to build and change what I already had and helped smooth things out with explanations when I couldn't understand why things werent working.

## Quote of the Week

**Hot Tip!** *“Did you know your computer’s cupholder can also be used to play DVDs?”*