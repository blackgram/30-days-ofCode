

const Largest = (myArray) => {

    let largestEl = 0
    for(let i=0; i < myArray.length; i++) {
        myArray[i] > largestEl ? largestEl = myArray[i] : largestEl
    }
    console.log(`The largest element in your array is ${largestEl}`)
}

// To test pass your array into the function as argument

Largest([2,54,2,3,4,0,34,53,535,727,1,999])