
// ========= print sum of 1 to 5 =============

var sum = 0;
var i = 1;
do {
    sum = sum + i;
    i++;

} while (i <= 5)

console.log("Total = " + sum)


// ========= write a program that will print the sum of all the numbers that are divisible by 3 and 5 from 1-100 =====

var sum = 0;
do {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;

} while (i <= 100)
console.log("Sum = " + sum)




