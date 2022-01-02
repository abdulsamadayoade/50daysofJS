function reverseAString(str) {
    const splitString = str.split('');
    const reverseString = splitString.reverse();
    const joinString = reverseString.join('');

    return joinString;
}

console.log(`Reversed string is: ${reverseAString('JavaScript is awesome')}`)