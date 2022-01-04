function reverseAString(str) {
    const result = str.split('').reverse().join('');
    return result;
}

console.log(`Reversed string is: ${reverseAString('JavaScript is awesome')}`)