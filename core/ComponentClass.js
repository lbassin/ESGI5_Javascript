import TypeChecker from "./Utils/type_check.js";

export function ComponentClass() {
    this.props = {};

    this.display = function (newProps) {
        if (shouldUpdate(newProps)) {
            let output = this.render();

            if (!typeChecker.check(output, {type: 'string'})) {
                throw new TypeError(`Output of ${this.constructor.name} must be a string, ${output.constructor.name} given.`);
            }

            return output.interpolate(this.props);
        }
    };

    const shouldUpdate = (newProps) => {
        if (newProps !== this.props) {
            this.props = newProps;

            return true;
        }

        return false;
    };

    const typeChecker = new TypeChecker();

    const render = () => '';
}