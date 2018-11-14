import { HelloComponentClass } from "./src/HelloComponentClass.js";

let helloComponent = new HelloComponentClass();


let returned = helloComponent.display({
    'toto': 'hello world'
});

console.log(returned);