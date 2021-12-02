# Card

卡片组件

### 示例

<m-card imgSrc="tqq-ui/vite.png" summary="Vite零基础快速入门">
  <template slot="footer">
    <div class="footer">
      <div class="level">中级 · 528人</div>
      <div class="price">￥299.00</div>
    </div>
  </template>
</m-card>

### 代码

```html
<m-card imgSrc="/vite.png" summary="Vite零基础快速入门">
  <template slot="footer">
    <div class="footer">
      <div class="level">中级 · 528人</div>
      <div class="price">￥299.00</div>
    </div>
  </template>
</m-card>
```

### 属性

| 参数      | 说明       | 类型        | 是否必要 | 默认值 |
| --------- | ---------- | ----------- | -------- | ------ |
| width     | 卡片的宽度 | Number      | false    | -      |
| imgSrc    | 图片地址   | String      | true     | -      |
| imgHeight | 图片高度   | Number      | false    | -      |
| summary   | 卡片概要   | String/Slot | false    | -      |
| footer    | 卡片底部   | Slot        | false    | -      |
