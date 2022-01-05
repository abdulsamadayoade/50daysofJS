function getTheGapX(str) {
    if( str.lastIndexOf('X')==-1&& str.indexOf('X')==-1)
        return -1;
    else
        return str.lastIndexOf('X') - str.indexOf('X');
}
console.log(`Gap between the X's: ${getTheGapX(XeroX)}`);
console.log(`Gap between the X's: ${getTheGapX(Xamarin)}`);