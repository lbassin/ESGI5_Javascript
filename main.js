import './core/index.js';
import { RootComponentClass } from "./src/RootComponentClass.js";

const rootComponent = new RootComponentClass();
let content = rootComponent.display({'name': 'World'});

document.getElementById('root').innerHTML = content;
