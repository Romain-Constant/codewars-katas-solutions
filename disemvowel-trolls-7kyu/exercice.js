

/* function isPalindrom(word) {
    
    let lettersArray = word.split("")
        .reverse()
        .join("")

    return lettersArray.toUpperCase() === word.toUpperCase();

}


console.log(isPalindrom('kayak')) // true
console.log(isPalindrom('SOS')) // true
console.log(isPalindrom('Kayak')) // true
console.log(isPalindrom('Bonjour')) // false */


/* function getRandomInt(max) {
        
        return Math.floor(Math.random() * (max+1) ); 
  }

let solution = getRandomInt(10);

function isRight() {
    return solution === guess();
}
console.log(solution);

function guess() {
    const   userChoice = prompt("Devinez un nombre entre 0 et 10");
    return (userChoice * 1);    
}

for (let i = 3; i > 0; i--) {
    if (isRight()) {
        alert("Bravo vous avez trouvé")
        break
    }
    else if (i > 1) {
        alert("Essayez encore, il vous reste " + (i - 1) + " essais")
    }
    else alert("vous avez perdu")
}
 */

/* function isPremier(n) {
    if (n < 2) {
        return false;
    }
    else if (n == 2 || n == 3 || n == 5 || n == 7) {
        return true;
    }
    else if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
        return false;
    }
    else return true;
    
}

console.log(isPremier(4)); */




/* const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

function moyenne(notes) {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
        
    }
    return sum / notes.length
}

for (let student of students) {
    student.moyenne = moyenne(student.notes)
    student.bestNote = Math.max(...student.notes)
    student.worstNote = Math.min(...student.notes)
}

students.sort((a, b) => b.moyenne - a.moyenne)

console.log(`le meilleur étudiant est ${students[0].name} avec une moyenne de ${students[0].moyenne}, une meilleure note de ${students[0].bestNote} et une moins bonne note de ${students[0].worstNote}`) */

/* const phrase = "Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi."

const words = phrase
    .toLowerCase()
    .split(" ")
    
let frequencies = {}

for (let word of words) {
    if (frequencies[word]) {
        frequencies[word]++
    }
    else {frequencies[word] = 1
    }
}

const frequenciesArray = []
for (let k in frequencies) {
    frequenciesArray.push({
        word : k,
        count : frequencies[k]
    })
}

frequenciesArray.sort((a, b) => b.count - a.count)

console.log(frequenciesArray)
console.log(typeof frequenciesArray)
console.log(frequencies)
console.log(typeof frequencies) */


/* function longest(s1, s2) {
    
    let newString = Array.from(new Set(s1 + s2))
    return newString.sort().join("")
  }
console.log(longest("aretheyhere", "yestheyarehere"))
console.log()
console.log() */

/* function XO(str) {
    let numberX = 0
    let numberO = 0
    for (let i = 0; i < str.length; i++)
    if (str[i] === "o" || str[i] === "O") {
        numberO += 1
    }
    else if (str[i] === "x" || str[i] === "X") {
        numberX += 1
    }
    
    return numberO === numberX
}

function XP(str) {
    return console.log(str.toLowerCase().split('x'));
}

console.log(XO('xo'))
console.log(XP("xxxm")) */



/* function duplicateCount(text){
    text = text.toLowerCase()

    let obj = {}
    let count = 0

    for (let i of text) {
        if (!obj[i]) {
            obj[i] = 1
        }
        else {obj[i]++}
    }
    
    for (let n in obj) {
        if (obj[n] > 1) {
            count++
        }
    }
    return count

  }

console.log(duplicateCount("Indivisibilities"))  */


/* function createPhoneNumber(numbers){
    let preFix = ""
    let suFfix = ""

    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            preFix = preFix + numbers[i]
        }
        else suFfix = suFfix + numbers[i]
    }
    return `(${preFix}) ${suFfix.slice(0, 3)}-${suFfix.slice(3)}`

  
} */




function validParentheses(parens) {
    let openParen = 0

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            openParen += 1
        }
        else {
            openParen -= 1
        }
        if (openParen < 0) {
        return false
        }
    }  

    

    if (openParen === 0) {
        return true
    }
    else {return false}
      

}
  
    


console.log(validParentheses(")("))
