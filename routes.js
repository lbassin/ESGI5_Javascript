export let routes = [
    {
        route: "http://localhost:8080/test",
        name: "test",
        component: "HelloComponentClass"
    },
    {
        route: "http://localhost:8080/testparam/{param}",
        name: "testparam",
        component: "HelloComponentClass"
    }
];