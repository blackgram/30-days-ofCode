
const secondLargest = (array) => {
    let Largest = 0
    let nextLargest = 0
    sorted = array.sort((a,b)=>a - b)

    for (let i = 0; i < sorted.length -1 ; i++){
        nextLargest = array[i]
    }

    return nextLargest;
}

console.log(secondLargest([1,2,3,40,5,6,7,8,9,5,37, 38]))