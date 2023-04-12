
const arrSum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(arrSum([2,43,2,55,6,5,1,9]))