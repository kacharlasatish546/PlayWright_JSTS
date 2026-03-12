let number = 7;

function checkPrime(num) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

checkPrime(number) ? console.log(`${number} is a prime number`) : console.log(`${number} is not a prime number`);