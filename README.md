# mf-loader

Webpack Module Federation loader

## vanillaJS

```html
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@euricom/mf-loader@0.1.0"></script>
  </head>
  <body>
    <h1>Vanilla JS</h1>
    <div id="panel"></div>
    <script>
      mfLoader.init('app@http://localhost:3000/remoteEntry.js', 'shareable/Panel', { selector: '#panel' });
    </script>
  </body>
</html>
```
