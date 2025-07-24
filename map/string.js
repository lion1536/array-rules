import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function convertToString(arr) {
  return arr.map((n) => n.toString());
}

const array = [2, 4, 78, 32, 56];
const result = convertToString(array);
console.log(result);

rl.close();
