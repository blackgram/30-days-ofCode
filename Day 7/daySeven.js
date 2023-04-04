

const noDuplicates = (array) => {
    let newArr = array.filter((c, index) => {
        return array.indexOf(c) === index
    })

    return newArr
}

console.log(noDuplicates(['d','e', 't', 'e', 'y', 't']))