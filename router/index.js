const routes = [
    'user',
    'vendor'
];

class Router {
    constructor(app) {
        routes.forEach(r => {
            const route = require(`./${r}`);
            const routeUrl = this.getRoutePath(route);
            if (route.auth)
                app.use(routeUrl, route.auth, route.router);
            else
                app.use(routeUrl, route.router);
            console.log('Registered ', r);
        });
    }

    getRoutePath(route) {
        if (route.isView) {
            return `/app${route.path}`;
        } else {
            return `/api${route.path}`;
        }
    }
}

module.exports = Router;
