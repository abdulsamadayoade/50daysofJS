function truncateWithWordLimit(str, wordLimit) {
    str = " " + str; let a = 0; let b = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ")
            a++;
        if (a > wordLimit)
            break;
        b = b + str.charAt(i);
    }
    return b.trim();
}

console.log(`Truncated string: ${truncateWithWordLimit('JavaScript is simple but not easy to master', 3)}`);
console.log(`Truncated string: ${truncateWithWordLimit('Codedamn is the best place to learn to code', 5)}`)