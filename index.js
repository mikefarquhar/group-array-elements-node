const groupArrayElements = require("./group-array-elements");

const elements = [1, 2, 3, 4, 5];
const numGroups = 3;
const groupedElements = groupArrayElements(elements, numGroups);

console.log("Input elements:");
console.log(elements);
console.log(`Split into ${numGroups} groups, returns:`);
console.log(groupedElements);
