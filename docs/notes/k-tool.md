1. ^\s*\n 匹配所有空行
2. `path: ''` 表示空路径，即根路径的直接子路径。例如，如果根路径是 `https://example.com`，那么 `https://example.com/` 和 `https://example.com` 都会匹配到 `path: ''` 的路由。
 `path: '/'` 表示根路径。它是一个具体的路径，只有当路径完全匹配根路径时才会触发该路由。例如，`https://example.com/` 才会匹配到 `path: '/'` 的路由，而 `https://example.com/some-other-path` 将不会匹配。
 3. .sync modifier - two-way binding for a prop
  ```js
  //child component
  this.$emit('update:title', newTitle)
  //parent component
  <text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
  ></text-document>
  //或者使用modifier修饰符
  <text-document v-bind:title.sync="doc.title"></text-document>
  ```
  3. vscode点击文件路径无法跳转
  
  