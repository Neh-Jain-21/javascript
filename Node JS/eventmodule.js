/** @format */

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
    console.log(`Status Code = ${sc} and Page = ${msg}`);
});

event.on("multipleEvent", () => {
    console.log("Show Alert");
});

event.on("multipleEvent", () => {
    console.log("Show PopUp");
});

event.emit("checkPage", 200, "OK");

event.emit("multipleEvent");
