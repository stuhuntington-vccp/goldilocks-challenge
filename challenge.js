const fs = require('fs');
const originalInput = fs.readFileSync('input.txt', 'utf8');
const output = initChallenge(originalInput);

fs.writeFileSync('output.txt', output.join('\n'), 'utf8');

function initChallenge(input) {
  let formattedInput = formatInput(input);
  const goldilocks = formattedInput.shift();
  return calculatePossiblities(goldilocks, formattedInput);
}

function formatInput(input) {
  return input
    .split(/\n/)
    .map((line, index) => {
      let data = line.split(' ').map((item) => parseInt(item, 10));

      data.push(index);
      return data;
    })
    .filter((item) => {
      return item[0] !== '';
    });
}

function calculatePossiblities(goldilocks, input) {
  return input
    .filter((option) => {
      if (option[0] >= goldilocks[0] && option[1] <= goldilocks[1]) {
        return option;
      }
    }).map((item) => item[2]);
}
