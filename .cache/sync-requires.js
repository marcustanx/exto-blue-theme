const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/page.js"))),
  "component---src-templates-contact-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/contact.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/home.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/blog.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/portfolio.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/post.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/marcustan/exto-blue-theme/.cache/dev-404-page.js")))
}

