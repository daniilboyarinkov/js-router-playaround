class Router {
  constructor(routes) {
    // {"name": () => "router handler"}
    this.routes = routes;
    this._init();
  }

  // router routes initializer
  _init() {
    // shadow copy of routes
    this._routes = [];
    const routes = Object.keys(this.routes);

    for (const route of routes) {
      const callback = this.routes[route];
      this._routes.push({
        callback,
        pattern: new RegExp("^" + route.replace(/:\w+/g, "(\\w+)") + "$"),
      });
    }
  }

  // trigger route change
  dispatch(path) {
    for (let i = this._routes.length - 1; i >= 0; i--) {
      const _route = this._routes[i];
      const match = path.match(_route.pattern);

      if (match) {
        this._routes[i].callback.apply(this, match.slice(1));
      }
    }
  }
}
