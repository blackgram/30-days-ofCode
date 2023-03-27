

const sortAS = (array) => {
    const first = array.sort()
    let check = typeof first == 'string' ? first : first.sort((a,b)=>(a-b)) 

    return check
};

console.log(sortAS(["b", "as",'p','eyfey']))

console.log(sortAS([7,32,54,2,5,45,23,8,75]))