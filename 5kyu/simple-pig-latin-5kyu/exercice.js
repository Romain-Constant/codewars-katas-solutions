/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str) {
    str = str.split(" ")
    const returnArray = []

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            returnArray.push(orderLetters(str[i]))
        }
        else {
            returnArray.push(str[i])
        }
    }
    return returnArray.join(" ")
}
function orderLetters(word) {
    word = word.split("")
    const returnWord = word.splice(1)
    returnWord.push(word[0], "ay")
    return returnWord.join("")

}