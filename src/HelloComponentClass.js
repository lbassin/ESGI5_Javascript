import { ComponentClass } from "./ComponentClass.js";

export class HelloComponentClass extends ComponentClass {
    render() {
        super.render();
        const data = {
            name: 'Toto',
            test: 'Hello'
        };

        let text = "bonjour {{ name }} et encore {{ test }} et encore {{ test }} et encore {{ daily }}";
        text = text.interpolate(data);

    };

}