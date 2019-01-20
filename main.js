import './core/index.js';
import RootComponent from "./src/RootComponent.js";

const rootComponent = new RootComponent();
rootComponent.display().then((content) => {
    document.getElementById('root').innerHTML = content;

    execScripts(content);
});

function execScripts(content) {
    const regex = new RegExp('<script(.+?)<\\/script>', 'gis');
    const data = content.match(regex);

    for (let i = 0; i < data.length; i++) {
        const startOfScript = data[i].indexOf('>') + 1;
        const scriptLength = data[i].lastIndexOf('<') - startOfScript;

        const script = data[i].substr(startOfScript, scriptLength);

        eval(script);
    }
}
