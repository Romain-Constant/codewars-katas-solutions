/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
    let returnArray = [];
    if (str === "") {
        return returnArray;
    }
    else if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i += 2) {
            returnArray.push(str[i] + str[i + 1]);
        }
    }
    else {
        for (let i = 0; i < str.length; i += 2) {
            if (i === str.length - 1) {
                returnArray.push(str[i] + "_");
            }
            else {
                returnArray.push(str[i] + str[i + 1]);
            }
        }
    }
    return returnArray;
}