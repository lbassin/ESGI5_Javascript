function Component() {
    this.props = {};
    this.maraviable = null;


    this.display = function (newProps) {
        this.shouldUpdate(newProps);
    };

    this.shouldUpdate = function (newProps) {
        //TODO compare newProps with this.props
        //TODO if true, call this.render()
    };


    this.render = function () {
        //TODO call sub-components display method
    };
}