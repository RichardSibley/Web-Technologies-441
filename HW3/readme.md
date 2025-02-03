# Homework 2 Readme

## Challenges, Successes, and Perserverence

This should cover both Use of AI and my challenges/successes. 

So for challenges....this right here:  
            choosePath(event.target.getAttribute("onclick").match(/'([^']+)'/)[1]);
Trying to work this in was a struggle. I struggled understanding how to make the onclick work in general. I had trouble understanding how to make the strings work, the expressions and how to incorporate it all to a functional web page. I pured through all the help sites and in the end it was AI that helped me understand better. In this case, being able to see the code of AI to see how they were relating and referencing. I copied and pasted bits of it's code and asked it how and why it worked to see what it would tell me. At first I thought it was super complicated but AI actually did a great job explaining it. Here is a sample of how it broke down the code, explaining the RegEx: 

 **.match(/'([^']+)'/)**

    The .match(/'([^']+)'/) method is using a regular expression (RegEx) to extract the text inside the single quotes ('...').
    Explanation of the RegEx:
        / ... / → This defines a regular expression pattern.
        '([^']+)' → This pattern looks for text inside single quotes ('...'):
            ' → Matches the opening single quote.
            ([^']+) → Captures one or more (+) characters that are NOT (^) a single quote (').
            ' → Matches the closing single quote.
    The .match() method returns an array, where:
        The first item is the entire matched string.
        The second item ([1]) is the captured group, which is the actual value inside the quotes.
    
**Example:**

    For:
    "choosePath('forest')".match(/'([^']+)'/)
    The result is:
    ["'forest'", "forest"]
    The second item ("forest") is extracted using [1].

This helped me understand how the equation worked, showing me how it was defining, what it was defining and how it fit together. Getting this to work in my code was the success in this case. I got excited when it loaded the images and referred back to the pages I wanted. It was not really different from what I had found on the various coding help sites and class external site but seeing the reference in action in something similar to what I was doing helped it sink in. Functions and if thens I caught pretty quickly. Previous coding classes helped there. 

I found it interesting that when I had AI generate the code, in spite of me telling it otherwise, it only gave one option. With 3 choices. That probably would work but I created more paths than what it tried to give me. It also regularly uses place holder images and I found I had to tell it to change the code to store the images locally to even get it to show images properly. It never seems to match what i've done until i go back and force it to detail things.

## Quote of the Week

**Remember** *“The computer allows us to make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila…”*