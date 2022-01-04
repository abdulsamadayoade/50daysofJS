function reverseGivenInteger(num) {
    // write your solution here
    const str = num.toString().split('').reverse().join('');
    const result = parseInt(str);

    return result;
}

console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`)
console.log(`Reversed integer is: ${reverseGivenInteger(2222)}`)
console.log(`Reversed integer is: ${reverseGivenInteger(1002)}`)