/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
	let returnArray = []

    for (let i = 0; i < s.length; i++) {
        returnArray.push(format(s[i], i + 1))
    }

    return returnArray.join("-")

}

function format(str, num) {
    let letter = str.toUpperCase()

    while (letter.length !== num) {
        letter += str.toLowerCase()
    }
    return letter
    
}