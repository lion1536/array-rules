import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function addToArray(arr) {
  return arr.map((item) => item + "!");
}

const array = ["phone", "tv", "airpods"];
const result = addToArray(array);

console.log(result);
rl.close();
