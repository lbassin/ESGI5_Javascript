import TypeChecker from "./Utils/type_check.js";

export default function TemplateComponent() {
    this.props = {};

    this.display = async function (newProps) {
        if (shouldUpdate(newProps)) {
            let output = await this.render();

            if (!typeChecker.check(output, {type: 'string'})) {
                let given = undefined;
                if(output){
                    given = output.constructor.name;
                }

                throw new TypeError(`Output of ${this.constructor.name} must be a string, ${given} given.`);
            }

            return output.interpolate(this.props);
        }
    };

    const shouldUpdate = (newProps) => {
        if (newProps !== this.props) {
            this.props = Object.assign({}, newProps);

            return true;
        }

        return false;
    };

    const typeChecker = new TypeChecker();

    this.render = () => '';
}