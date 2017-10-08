# eslint-config-miwa 配置

## 安装

` $ npm install --save-dev eslint-config-miwa babel-eslint eslint-plugin-babel`

说明：由于希望支持`jsx`，故使用了`babel-eslint`。

## 使用

### 配置文件

在项目根目录下新建文件`.eslintrc.js`：
```javascript
module.exports = {
  extends: 'miwa'
}
```

### 配置`package.json`
```json
  "scripts": {
    "lint": "eslint 需要检测的目录名",
    "lint:fix": "npm run lint -- --fix"
  },
```

## 参考资料
- [考虑参考项目结构](https://github.com/ipluser/eslint-config-es5)