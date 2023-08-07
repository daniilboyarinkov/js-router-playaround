const title = document.getElementById("title");

// router handlers
const indexHandler = (...args) => {
  title.textContent = "Hey y'all";
};

const articleHandler = (id, author) => {
  title.textContent = `Article #${id} Author: ${author}`;
};

const blogHandler = (name, id) => {
  title.textContent = `Artwork #${name}, comment #${id}`;
};

const routerConfig = {
  "/": indexHandler,
  "/article/:id/:author": articleHandler,
  "/blog/:name/post/:id": blogHandler,
};

const router = new Router(routerConfig);

// to change the route - just dispatch the route you need
router.dispatch("/");

// handler to dispatch route changing
const linkHandler = (event) => {
  // we are not interested in default anchor behavior
  event.preventDefault();

  const url = new URL(event.currentTarget.href);
  router.dispatch(url.pathname);
  // @todo delete test pathname replacer
  // router.dispatch(url.pathname.replace(/\/\D\:/, ""));
};

// add handler to all anchors on the page
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  anchor.addEventListener("click", linkHandler);
}
