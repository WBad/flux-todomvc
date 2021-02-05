module.exports = ({ htmlWebpackPlugin }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    ${htmlWebpackPlugin.tags.headTags.filter((tag) => tag.tagName === "meta")}
    <title>${htmlWebpackPlugin.options.title}</title>
    ${htmlWebpackPlugin.tags.headTags.filter((tag) => tag.tagName === "base")}
    ${htmlWebpackPlugin.tags.headTags.filter((tag) => tag.tagName === "link")}
    ${htmlWebpackPlugin.tags.headTags.filter((tag) => tag.tagName === "script")}
  </head>
  <body>
    <article id="approot" class="approot"><article>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
    ${htmlWebpackPlugin.tags.bodyTags}
  </body>
</html>`;
