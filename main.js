const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

// let newHr = 0;

// if (hours > 12) {
// 	newHr = hours - 12 + 'pm';
// 	if (newHr < 10) {
// 		newHr = '0' + newHr + 'pm';
// 	} else {
// 		newHr = newHr = 'pm';
// 	}
// } else {
// 	newHr = hours;

// 	if (newHr < 10) {
// 		newHr = '0' + newHr + 'am';
// 	} else {
// 		newHr = newHr + 'am';
// 	}
// }

console.log(setNumbers(hours));

function setNumbers(num) {
	if (num < 10) {
		result = '0' + num;
	} else {
		result = num;
	}
	return result;
}
