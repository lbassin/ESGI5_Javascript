export class ComponentClass {
    constructor() {
        this.props = [];
    }


    display(newProps) {
        this.shouldUpdate(newProps);
    };

    shouldUpdate(newProps) {
        if (newProps in this.props) {
            return false;
        }

        this.props.push(newProps);

        return this.render()
        //TODO compare newProps with this.props
        //TODO if true, call this.render()
    };


    render() {
        //TODO call sub-components display method
    };

}