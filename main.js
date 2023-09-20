const now = new Date();
console.dir(now);

const months = [
	'Januaty',
	'February',
	'March',
	'April',
	'May',
	'June',
	'August',
	'Semtember',
	'October',
	'November',
	'December',
];

const days = ['Sunday', 'monday', 'Tuesday', 'wednesday', 'Thuesday', 'Friday', 'Saturday'];

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(hours);

let newHr = 0;

if (hours > 12) {
	newHr = hours - 12 + 'pm';
} else {
	newHr = hours + 'am';
}
console.log(newHr);
