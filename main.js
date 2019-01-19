import './core/index.js';
import RootComponent from "./src/RootComponent.js";

const rootComponent = new RootComponent();
document.getElementById('root').innerHTML = rootComponent.display();
