// "Event Emitter" vai ativar um código em alguns pontos da aplicação, como o início.
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");

console.log("depois");
