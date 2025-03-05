// Alastyr Bill
// ITMD 441 Undergraduate Student

// Exercise #1
function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minVal = Math.min(...numbers);
    let maxVal = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / totalNumbers;

    console.log("Total Numbers: " + totalNumbers + ", Min Value: " + minVal + ", Max Value: " + maxVal + ", Average: " + avg.toFixed(2));
}

// Tests
console.log("Exercise 1 - minMaxAverage:");
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([12, 45, 1, 8, 4, 14, 24, 6]);

// Exercise 2
function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(str + ": " + count + "vowels");
}

// Tests
console.log("Exercise 2 - countVowels:")
countVowels("Winter");
countVowels("Stray Kids");
countVowels("Ateez");

// Exercise 3
function sortNumbers(numbers) {
    let sortedArray = numbers.sort((a,b) => a - b);
    console.log("Orignial Array: " + numbers + " -> Storted Array: " + sortedArray);
}

// Tests
console.log("Exercise 3 - sortNumbers:")
sortNumbers([9, 4, 6, 2]);
sortNumbers([12, 4, 1, 9]);
sortNumbers([59, 21, 2, 8]);

// Exercise 4
function celsiusToFahrenheit(celsius) {
    let fahreneheit = (parseFloat(celsius) * 9/5) + 32;
    console.log(parseFloat(celsius).toFixed(1) + " Celsius = " + fahreneheit.toFixed(1) + " Fahrenheit");
}

// Tests
console.log("Exercise 4 - celsiusToFahrenheit:")
celsiusToFahrenheit(30);
celsiusToFahrenheit(100);
celsiusToFahrenheit(0);