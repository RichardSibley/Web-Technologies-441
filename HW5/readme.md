# Homework 2 Readme

## AI Reflection

So I found a way, through an embarassing amount of time, stack overflow and ChatGPT to shuffle the array
using the Fisher-Yates Shuffle or Knuth Shuffle. ChatGPT helped me understand how to:

1. Loop through array:

for (let i = arr.length - 1; i > 0; i--) 

    The loop starts from the last index of the array (arr.length - 1) and goes backwards (i--).
    The condition i > 0 ensures that the loop stops when i reaches 1. This is because the last element in the array doesn't need to be swapped with itself (since it's already in a random position).

2. Random index generation:

const j = Math.floor(Math.random() * (i + 1));

    Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
    Math.random() * (i + 1) scales the random number so it’s between 0 and i (inclusive).
    Math.floor() rounds the number down to the nearest integer, ensuring that j is an integer between 0 and i.

And how to:

3. Swap the elements:

[arr[i], arr[j]] = [arr[j], arr[i]];

    This is a destructuring assignment, a shorthand way to swap two elements in an array.
    arr[i] and arr[j] are the elements at indices i and j in the array.
    The expression [arr[i], arr[j]] = [arr[j], arr[i]]; swaps the elements at these indices.

AI is of increasing help in getting me to understand how these pages are working and how I can fix them when my own code fails. 

It even broke it down by an example to see it in action and broke down why it works.

Example it gave:

Suppose the array is:

let arr = [1, 2, 3, 4, 5];

    First iteration (i = 4):
        j = Math.floor(Math.random() * 5) could result in j = 2.
        The elements at indices 4 and 2 are swapped. The array now looks like this: [1, 2, 5, 4, 3].

    Second iteration (i = 3):
        j = Math.floor(Math.random() * 4) could result in j = 0.
        The elements at indices 3 and 0 are swapped. The array now looks like this: [4, 2, 5, 1, 3].

    Third iteration (i = 2):
        j = Math.floor(Math.random() * 3) could result in j = 1.
        The elements at indices 2 and 1 are swapped. The array now looks like this: [4, 5, 2, 1, 3].

    Fourth iteration (i = 1):
        j = Math.floor(Math.random() * 2) could result in j = 0.
        The elements at indices 1 and 0 are swapped. The array now looks like this: [5, 4, 2, 1, 3].

After the loop finishes, the array is completely shuffled.
Why this works:

    By starting from the end of the array and swapping elements with random earlier elements (or itself), every element gets a fair chance to be in any position.
    The result is a uniformly random shuffle of the array, meaning every permutation of the array is equally likely.

This is an efficient way to shuffle an array because it only requires a single pass through the array (O(n) complexity) and operates in place without needing extra memory for another array.

While ChatGPT is not quite good at handling custom pages and required a lot of wrangling to get it to work it is an incredible resource if used to learn the hows and whys of code. I do try and take it 
with a grain of salt and try to back it up with proof from other sites, it has proven to be a great help in increasing my level of understanding.


## Quote of the Week

**Remember** *"There are two rules for success: 1. Never tell everything you know."*