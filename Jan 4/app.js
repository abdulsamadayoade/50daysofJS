function convertTo24HrsFormat(time12h) {
    let [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
  	    hours = '00';
    }
  
    if (modifier === 'PM') {
  	    hours = parseInt(hours, 10) + 12;
	}
  
    return `${hours}:${minutes}`
}

console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`)
console.log(`Converted time: ${convertTo24HrsFormat('05:00 AM')}`)
console.log(`Converted time: ${convertTo24HrsFormat('12:33 PM')}`)
console.log(`Converted time: ${convertTo24HrsFormat('01:59 PM')}`)
console.log(`Converted time: ${convertTo24HrsFormat('11:08 PM')}`)
console.log(`Converted time: ${convertTo24HrsFormat('10:02 PM')}`)