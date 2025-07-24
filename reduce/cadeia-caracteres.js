import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function concatenarLetras(arr) {
  return arr.reduce((acumulador, atual) => acumulador + atual, "");
}

const cadeia = ["a", "b", "c", "d", "e"];
const resultado = concatenarLetras(cadeia);
console.log(resultado);

rl.close();
