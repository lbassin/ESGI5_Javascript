import './core/index.js';
import RootComponent from "./src/RootComponent.js";

const rootComponent = new RootComponent();
rootComponent.display().then((content) => {
    document.getElementById('root').innerHTML = content;
});
