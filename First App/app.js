const { logger } = require("handlebars");

function sayHello(name){
    console.log("Hello " + name);
}
sayHello("John");

// call a module
logger.log("message");