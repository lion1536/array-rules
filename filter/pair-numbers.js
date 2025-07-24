import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const numbers = [2, 1, 3, 6, 7, 10];
const pair = numbers.filter((num) => num % 2 === 0);
console.log(pair);

rl.close();
