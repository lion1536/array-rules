import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function letraInicial(arr) {
  return arr.filter((x) => x.startsWith("a"));
}

const letra = [
  "abóbora",
  "ameixa",
  "faca",
  "carro",
  "bicicleta",
  "moto",
  "celular",
];

const resultado = letraInicial(letra);
console.log(resultado);

rl.close();
