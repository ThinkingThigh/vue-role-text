# role-text

Vue 2 插件，根据当前角色类型渲染对应文案，用法类似 i18n。

## 安装

```js
import RoleTextPlugin from './src'

Vue.use(RoleTextPlugin, {
  messages: {
    admin: {
      welcome: '管理员你好',
      title:   '管理后台',
    },
    user: {
      welcome: '用户你好',
      title:   '首页',
    },
  },
})
```

`messages` 的顶层 key 为角色类型，每个角色下的 key/value 为文案条目。同一个 key 在不同角色下返回不同的值。

## 设置角色

登录后调用 `setRole` 设置当前角色，全局响应式生效：

```js
// 登录成功后
this.$rt.setRole('admin')
```

切换角色后，所有使用 `$rt` 的地方自动更新。

## 获取文案

### 在模板中

```html
<p>{{ $rt('welcome') }}</p>
<p>{{ $rt('title') }}</p>
```

### 在 JS 中

```js
const text = this.$rt('welcome')
```

key 不存在时，直接返回 key 本身，不会报错。

## role-text 组件

插件注册了全局组件 `<role-text>`，可替代函数调用方式：

```html
<!-- 默认渲染为 <span> -->
<role-text msg-key="welcome" />

<!-- 通过 tag 指定渲染标签 -->
<role-text msg-key="title" tag="h1" />
<role-text msg-key="welcome" tag="p" />
```

### Props

| Prop      | 类型   | 必填 | 默认值   | 说明         |
|-----------|--------|------|----------|--------------|
| `msg-key` | String | 是   | —        | 文案的 key   |
| `tag`     | String | 否   | `'span'` | 渲染的 HTML 标签 |

## 运行时替换文案

如需在运行时整体替换文案（例如从接口拉取），使用 `setMessages`：

```js
const messages = await fetchMessages()
this.$rt.setMessages(messages)
```

## API 速查

| 调用方式                        | 说明                       |
|---------------------------------|----------------------------|
| `Vue.use(plugin, { messages })` | 安装插件并传入文案          |
| `this.$rt('key')`               | 获取当前角色对应的文案      |
| `this.$rt.setRole('roleName')`  | 设置当前角色                |
| `this.$rt.setMessages(obj)`     | 运行时替换全量文案          |
