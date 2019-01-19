export class ComponentClass {
    constructor() {
        this.props = [];
    }


    display(newProps) {
        if (this.shouldUpdate(newProps)) {
            this.render();
        }
    };

    shouldUpdate(newProps) {
        // Compare newProps with this.props
        if (newProps !== this.props) {
            this.props.push(newProps);

            return true;
        }

        return false;
    };


    render() {
        let html = `
        <div style="background-color: red;width: 200px;height: 200px;">bonjour {{ name }}</div>
        `;


        //TODO call sub-components display method
    };

}

Object.prototype.interpolate = function (data) {
    let string = this;
    let myRegexp = /{{\s*(?<name>[^\s]+)\s*}}/gm;
    let matches = this.match(myRegexp);

    for (let match of matches) {
        let clean = match.replace("{{", "").replace("}}", "").trim();
        if (clean in data) {
            string = string.replace(match, data[clean]);
        } else {
            throw new Error(`Parameter ${clean} does not exists`);
        }
    }

    return string;
};
