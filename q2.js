
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

rl.question('Enter numbers (comma-separated): ', (inputText) => {
    const nums = inputText.split(',').map(Number);

    const missingNumber = findMissingNumber(nums);
    console.log(`The missing number is: ${missingNumber}`);
    
    rl.close();
});
