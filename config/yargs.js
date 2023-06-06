const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    demandOption: true,
    describe: "Listar la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    demandOption: true,
    describe: "Hasta que numero se multiplica",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "The argument 'base' must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
