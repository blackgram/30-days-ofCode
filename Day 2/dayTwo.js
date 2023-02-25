

const palindrome = (word) => {

    const wordArray = word.split('')

    const reverseArray = wordArray.reverse()

    const reverseWord = reverseArray.join('')

    word == reverseWord ? window.alert(`${word} is a Palindrome`) :
    window.alert(`${word} is not a Palindrome - reload page to try again`)
}

palindrome(window.prompt("Please enter a word"))