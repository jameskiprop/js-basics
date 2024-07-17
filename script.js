let numArr = [23, 56, 77, 2, 90, 89];
let numArr2 = [45, 78];

let numArr3 = new Array(4);

console.log("Without the LOOP:");
console.log(numArr[0]);
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]);
console.log(numArr[4]);
console.log(numArr[5]);

// FOR LOOP
console.log("");
console.log("Using the FOR LOOP:");
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// WHILE LOOP
console.log("");
console.log("Using the WHILE LOOP:");
let someVar = 0;
while (someVar < numArr.length) {
  console.log(numArr[someVar]);
  someVar++;
}

// DO WHILE
console.log("");
console.log("Using the DO WHILE LOOP:");
let i = 0;
do {
  console.log(numArr[i]);
  i++;
} while (i < numArr.length);

// FOR...OF
console.log("");
console.log("Using the FOR OF LOOP:");
for (let i of numArr) {
  console.log(i);
}

// // FOR EACH
console.log("");
console.log("Using the FOR EACH method:");
numArr.forEach(function (elementValue, elementIndex) {
  // console.log(numArr[elementIndex]);
  console.info(elementValue);
});

// // MAP
let numArr = [23, 56, 77, 2, 90, 89];
let numArr2 = [45, 78];

// console.log("");
// console.log("Using the MAP method:");
