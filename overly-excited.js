// Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
/* function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += ` ${theWordArray[i]}`

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence) */

/* The learning objective of this exercise is to practice defining and using function arguments.

Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point. */

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, someCharacter) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i]
        if((i+1) % 3 === 0) {
            buildMeUp += someCharacter
            
        } 
        buildMeUp += " ";

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

addExcitement(sentence, "?")