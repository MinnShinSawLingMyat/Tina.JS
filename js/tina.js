class Tina {
    constructor(layout) {
        this.routes = {};
        this.layout = layout;
    }
    route(routes) {
        routes.forEach(route => {
            this.routes[route.path] = route.component;
        });
    }
    start() {
        const navigateTo = () => {
            const path = window.location.hash.slice(1)
                            ? window.location.hash.slice(1)
                            : '/';
            
            const component    = this.routes[path];
            const appContainer = document.querySelector('#app');
            const instance     = new component();

            const layout = new this.layout(instance.render());
            
            appContainer.innerHTML = layout.render();

            
            if(component.prototype.bind){
                instance.bind()
            }

        };

        const navigate = (path) => {
            window.location.hash = path;
            navigateTo();
        };

        window.addEventListener('hashchange', navigateTo);

        navigateTo();

        return {
            navigate,
        };
    }
}