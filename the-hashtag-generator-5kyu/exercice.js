/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */


function generateHashtag (str) {
    let stringArray = str.split(" ")
    let returnArray = ["#"]
    

    for (let w of stringArray) {
        if (w != "") {
            returnArray.push(w[0].toUpperCase() + w.slice(1))
        }
    }
    
    if ((returnArray == "#") || (returnArray.join("").length > 140)) {
        return false
    }
    else {        
        return returnArray.join("")
        }    
}