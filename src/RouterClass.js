export class RouterClass {
    constructor(routes) {
        this.URL = document.URL.trim();
        this.routes = routes;
        this.componentToLoad;
    }

    isMatching() {
        let pattern = new RegExp('^https?:\\/\\/[^\\/]+\\/(.+)?', 'i');
        if(pattern.test(this.URL)){
            let matchesURL = this.URL.match(pattern);
            for (let i in this.routes) {
                if(i.hasOwnProperty('route')){
                    let matchesCurrentRoute = i.route.match(pattern);
                    if(typeof matchesURL[0] !== 'undefined' && typeof matchesURL[0] !== 'undefined' && matches[0] === matchesCurrentRoute[0]) {
                        if(i.hasOwnProperty('component') && typeof i.component === "string"){
                            this.componentToLoad = i.component;
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };

    isValidURL() {
        let pattern = new RegExp('^https?:\/\/?','i');
        return pattern.test(this.URL);
    }

    loadComponent() {
        if(!this.isValidURL() && !this.isMatching() && typeof this.componentToLoad === "undefined"){
            return false;
        }

        let component = new this.componentToLoad();

        let returned = component.display({
            'toto': 'hello world'
        });

        console.log(returned);
    }
    // shouldUpdate(newProps) {
    //     if (newProps in this.props) {
    //         return false;
    //     }
    //
    //     this.props.push(newProps);
    //
    //     return this.render()
    //     //TODO compare newProps with this.props
    //     //TODO if true, call this.render()
    // };
    //
    //
    // render() {
    //     //TODO call sub-components display method
    // };

}