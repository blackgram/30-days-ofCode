//function to check if number is a prime  number

const primeCheck = (num) => {
    // switch (num){
    //     case num<1: console.log("Number 1 is neither a Prime Number or Composite Number");
    //     break;
    //     case num > 1: for (let i = 0; i<num; i++){ 
    //         if (num % i === 0){console.log(`${num} is not a prime number`)} 
    //         else console.log(`${num} is a Prime Number`)};
    //     break;
    //     case num < 1: console.log('Number is less than 0 and can not be computed')
    //     default:;
    // }
    let check = true;

    if (num < 1) { console.log("Number 1 is neither a Prime Number or Composite Number") }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                check = false
                break;
            }
        }
        check ? console.log(`${num} is a Prime Number`) : console.log(`${num} is not a prime number`)
    }
    else console.log('Number is less than 0 and can not be computed')
}


primeCheck(23)