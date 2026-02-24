##### template 组件和layout组件的区别(2025年已经删掉了template组件)
1. 发生路由跳转的时候template不会保留状态，layout会保留状态 
2. 发生页面跳转的时候template会为子项创建新实例，重新创建dom元素，在客户端组建中不保留状态，并且重新同步效果

## 服务端组件（RSC）
只会在服务端执行。

1. 数据获取：允许数据获取移动到服务器，数据获取更快。
2. 安全性：允许将敏感数据和逻辑保留在服务器上，不暴露给客户端
3. 缓存：在服务器上渲染，可以在后续请求和用户之间重复使用。
4. 性能：将UI的非交互部分移动到服务器组件，减少所需的客户端JS数量。
5. 搜索引擎优化和社交网络可共享性：可以使呈现的html为页面编制索引
6. 流式处理：服务器组件允许将渲染工作拆分为多个块，再准备就绪时将其流式传输到客户端。

服务端组件有什么限制：
1. 不能使用react的hook
2. 不能使用点击事件
3. 不能使用浏览器的api

## 客户端组件（CSR）
客户端组件也会在服务端执行，为了将初始数据给到客户端，为了SSR，。
执行npm run build的时候，会执行客户端代码。

### 不同类型组件交叉使用注意事项
> 一般不要将服务器组件导入到客户端组件中，因为设置为“use client”的组件以及其子组件，一般会被打包成客户端代码。

server-only包，`npm i server-only`，可以避免服务端组件被客户端组件使用。

如果一定要使用，可以在客户端组件中使用children传递服务器组件，因为底层会进行隔离。

### 数据共享
 使用fetch或React的cache函数在需要它的组件中获取相同的数据。因为React扩展了fetch来自动记住数据请求，并且fetch不可用时可以使用cache函数。

### 引入第三方包
可以自己建一个客户端组件，使用“use client”包裹，然后引入第三方包。

### 在服务端组件使用Context Providers
和上述差不多，建立一个客户端组件，使用“use client”包裹，然后引入Context Providers。

## 服务器渲染策略
Static：在构建时预渲染页面，生成静态HTML文件，浏览器直接加载静态HTML文件。
Dynamic：在请求时动态渲染页面，生成HTML文件，浏览器直接加载HTML文件。
Streaming：在请求时动态渲染页面，生成HTML文件，浏览器直接加载HTML文件。

### 静态渲染
打包的时候符号为o
在构建时预渲染页面或者在数据重新验证后在后台渲染，结果将被缓存并可以推送到内容分发网络（CDN）。允许在用户和服务器请求之间共享渲染工作的结果

`export const revalidate = 3600; // 3600秒后重新验证，这时候刷新页面会重新渲染`

### 动态渲染
打包的时候符号为f
在渲染过程中，如果发现动态API或未缓存的数据请求，Next将切换到动态渲染整个路由.

动态api:
- cookie
- headers
- connection
- draftMode
- searchParams prop
- unstable_noStore
- unstable_after

#### 渲染策略判断表

| Dynamic APIs | Data | Route |
|--------------|------|-------|
| No (不) | Cached (缓存) | Statically Rendered (静态渲染) |
| Yes (是的) | Cached (缓存) | Dynamically Rendered (动态渲染) |
| No (不) | Not Cached (未缓存) | Dynamically Rendered (动态渲染) |
| Yes (是的) | Not Cached (未缓存) | Dynamically Rendered (动态渲染) |

**总结：** 只有当"Dynamic APIs"为"No"且"Data"为"Cached"时，路由才会是"Statically Rendered"（静态渲染）。在所有其他组合情况下（Dynamic APIs为"Yes"，或Data为"Not Cached"），路由都是"Dynamically Rendered"（动态渲染）。

### 流式渲染
在请求时动态渲染页面，生成HTML文件，浏览器直接加载HTML文件。

## fetch 
fetch缓存是Next.js的缓存机制，用于缓存请求的响应。

### 缓存策略
在服务端组件或者在Router层使用fetch时，Next.js会自动缓存请求的响应。

#### Revalidating Data 重新验证数据
是清除Data Cache,并重新获取最新数据的过程。当数据发生更改，并且希望确保显示最新信息时，这很有用。

##### 两种方式重新验证缓存的数据
1. 基于时间重新验证
   在经过一定时间后自动重新验证数据。针对不经常更改且新鲜度不重要的数据很有用。
   1.1 `可以使用fetch的next.revalidate选项来设置资源的缓存生命周期，fetch('https://api.example.com', { next: { revalidate: 3600 } })`
   1.2 要重新验证route segment中的所有fetch请求，可以使用Segment Config Options
   即`export const revalidate = 3600;`

2. 按需重新验证
    根据事件手动重新验证数据，可以使用基于标签或基于路径的方法一次重新验证新数据。

## 缓存的四种类型
##### Request memoization （请求记忆）
React扩展了fetch API以自动记住具有相同URL和选项的请求，这意味着我们可以在React组件树中的多个位置为相同的数据调用fetch函数，而只执行一次。

即不需要在顶部获取数据，在组件之间转发props。相反可以在需要数据的组件中或许数据，无需担心通过网络对相同数据发出多个请求对性能的影响。

这个事React的一个功能不是next.js的功能。


##### Data Cache数据缓存
是next.js扩展了fetch API,可以允许服务器上的每个请求设置自己的持久缓存语义。

##### Full Route Cache完整陆游缓存
Next.js在构建时自动渲染和缓存路由，这是一项优化。允许我们为每个请求提供缓存的路由，而不是在服务器上呈现，从而加快页面加载速度。

Nextjs的默认行为是将路由的渲染结果缓存在服务器上，适用于在构建时或重新验证期间静态渲染的路由。

##### Router Cache 客户端陆游缓存
客户端缓存，用于在用户会话期间存储React Server组件有效负载，按各个路由段拆分。
当用户在路由之间导航时，Next会缓存访问过的路由段，并预取用户可能导航到的路由，基于<Link>其视区中的组件。