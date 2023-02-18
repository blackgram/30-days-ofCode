// For recieving input from browser

const dayOne = () => {
    const value = window.prompt("Enter a Number:");
    num = parseInt(value)
    let factorial = 1

    for (let i = 0; i < num; i++) {
        factorial *= i + 1
    }

   return alert(`The factorial of ${num} is ${factorial}`);
}
dayOne()


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