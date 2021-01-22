const items = [
	{ name: "Bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "Album", price: 10 },
	{ name: "Book", price: 5 },
	{ name: "Phone", price: 500 },
	{ name: "Computer", price: 1000 },
	{ name: "Keyboard", price: 25 },
];

//Use filter() to filter common things out of an array.
//makes a new array...
const filteredItems = items.filter((item) => {
	return item.price <= 100;
});
console.log(filteredItems);

//Arrow functions don't need return statements if they're one-liners!

//Use .map() to perform some action on each item of an array NOTE! This will take the items out, manipulate them, and store them in a new array.
const pluralizedItems = items.map((item) => item.name + "s");
console.log(pluralizedItems);

//use .forEach() to iterate over an array works mostly like a For loop
items.forEach((item) => console.log(item.name));
//Map might be better though as it returns an array and it can have items chained onto it.

//Use .find() to find a single object in an array of objects, returns first true item
const foundItem = items.find((item) => item.name === "Book");
console.log(foundItem);

//Use .some() to check if some condition exists in an array params returns true
const hasInexpensiveItems = items.some((item) => item.price <= 100);
console.log(hasInexpensiveItems);

//Use .reduce() to take items and reduce them down into something. Good for tallying up things...needs a second parameter that is a starting point. <----very useful! It's a sort of loop that takes a prior element and does something new to it with the next item in the array defined by you.
const total = items.reduce((currentTotal, item) => {
	return currentTotal + item.price;
}, 0);

console.log(total);

//Use .includes() to see if an array contains a value
const nums = [1, 2, 3, 4, 5];

const includesTwo = nums.includes(2);
console.log(includesTwo);
