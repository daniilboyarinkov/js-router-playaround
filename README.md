# pretty SIMPLE ROUTER on Vanilla JS

1. having an object of type:

```js
const routerConfig = {
  // Record<string, (...args: string[]) => void>
  routerName: () => void "Router Handler",
};
```

2. use it to initialize the router

```js
const router = new Router(routerConfig);
```

3. to change the route just call:

```js
router.dispatch("routerName");
```

4. to add link handler to all anchors in the page just run

```js
// handler to dispatch route changing
const linkHandler = (event) => {
  // we are not interested in default anchor behavior
  event.preventDefault();

  const url = new URL(event.currentTarget.href);
  router.dispatch(url.pathname);
};
```

Router will map routerName with its callback on its own providing params from href. By clicking the link below `articleHandler` would get `...["21", "test"]` as function arguments;

```html
<a href="/article/21/test">Article</a>
```

---

## TODO:

- [ ] handle window location changes
- [ ] change window location as well while dispatching
