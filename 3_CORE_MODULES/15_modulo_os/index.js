const os = require("os");

console.log(os.cpus()); // quantos cpus tem no servidor?

console.log(os.freemem()); // quanto de memoria livre tem na maquina?

console.log(os.homedir()); // qual diretorio principal dessa maquina?

console.log(os.type()); // qual tipo de SO?

// Com o módulo "os" podemos extrair informações do sistema operacional.
