# 数据化产品（react-redux）

A boilerplate with react, redux, redux-saga, react-router, webpack, babel, css-modules ...

## 环境准备

先安装依赖

```bash
$ npm install
```

想要更好的开发体验，还需安装两个 Chrome 插件：[Redux DevTools](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd) 和 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) 。

## 启动调试

```bash
$ npm start
$ open http://localhost:8989/
```

## 构建代码

```bash
$ npm run build

// 构建但不压缩
$ npm run build -- --no-compress
```

## 目录结构

```
.
├── /dist/               # 构建输出的文件会在这里
├── /node_modules/       # 第三方类库和工具
├── /src/                # 应用源码
│ ├── /components/       # React components
│ ├── /entries/          # 应用入口
│ ├── /layouts/          # 布局信息
│ ├── /reducers/         # reducers
│ ├── /routes/           # 路由信息
│ ├── /sagas/            # redux-sagas
│ └── /services/         # 处理和服务器的交互
├── proxy.config.js      # 配置 dora-plugin-proxy，用于 mock 和在线调试
├── webpack.config.js    # 扩展 webpack 配置
└── package.json         # 配置入口文件、依赖和 scripts


