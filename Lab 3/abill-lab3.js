// Alastyr Bill
// ITMD 441 Undergraduate Student

// Exercise #1
function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minVal = Math.min(...numbers);
    let maxVal = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / totalNumbers;

    console.log('Total Numbers: ${totalNumbers}, Min Value: ${minVal}, Max Value: ${maxVal}, Average ${avg.toFixed(2)}');
}

// Tests
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([12, 45, 1, 8, 4, 14, 24, 6]);
