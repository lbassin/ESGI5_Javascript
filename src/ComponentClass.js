class ComponentClass {
    props = {};
    maraviable = null;


    display(newProps) {
        this.shouldUpdate(newProps);
    };

    shouldUpdate(newProps) {
        //TODO compare newProps with this.props
        //TODO if true, call this.render()
    };


    render() {
        //TODO call sub-components display method
    };

}