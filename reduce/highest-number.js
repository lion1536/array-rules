import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function highestNumber(arr) {
  return arr.reduce((acumulador, maior) =>
    acumulador > maior ? acumulador : maior
  );
}

const array = [33, 24, 654, 789, 124];
const number = highestNumber(array);
console.log(number);

rl.close();
