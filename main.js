import { HelloComponentClass } from "./src/HelloComponentClass.js";
import { RouterClass } from "./src/RouterClass.js";
import { routes } from "./routes.js";

let helloComponent = new HelloComponentClass(),
    router = new RouterClass(routes);

    router.loadComponent();
// let returned = helloComponent.display({
//     'toto': 'hello world'
// });

// console.log(returned);