// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-contact-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/contact.js" /* webpackChunkName: "component---src-templates-contact-js" */),
  "component---src-templates-home-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/home.js" /* webpackChunkName: "component---src-templates-home-js" */),
  "component---src-templates-blog-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-portfolio-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-templates-post-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-project-js": () => import("/Users/marcustan/exto-blue-theme/src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/marcustan/exto-blue-theme/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/marcustan/exto-blue-theme/.cache/data.json")

