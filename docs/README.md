# Quick Start

#### Install

```bash
# npm
npm i tqq-ui

# yarn
yarn add tqq-ui
```

#### Import

> 在 main.js 中引用组件库

```javascript
// 全部引入
import TqqUI from "tqq-ui";
import "tqq-ui/dist/css/index.css";

Vue.use(TqqUI);
// 按需引入
import { Card } from "tqq-ui";
import "tqq-ui/dist/css/card.css";

Vue.use(Card);
```
