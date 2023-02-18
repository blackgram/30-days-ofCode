// For recieving input from node.js console or terminal
// To start program type "node dayOne.js"
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Input a Number:   ', (answer) => {
    let factorial = 1
    for (let i = 0; i < answer; i++) {
        factorial += factorial * i
    }
    console.log(`The factorial of ${answer} is ${factorial}`)
    rl.close()
})

// For recieving input from browser
const dayOne = () => {
    let num = window.prompt("Enter a Number:")

    let factorial = 1

    for (let i = 0; i < num; i++) {
        factorial += factorial * i
    }

    window.alert(`The factorial of ${answer} is ${factorial}`)
}

dayOne()
