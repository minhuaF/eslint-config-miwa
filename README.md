# eslint-config-miwa 配置

## 安装

` $ npm install eslint-config-miwa --save-dev`

## 使用

### 配置文件

在项目根目录下新建文件`.eslintrc`：
```javascript
{
  "extends": "eslint-config-miwa"
}
```

### 配置 `package.json`
```json
  "scripts": {
    "lint": "eslint 需要检测的目录名",
    "lint:fix": "npm run lint -- --fix"
  },
```

### 建议
1. 在VSCode中使用`eslint`需安装 `ESLint` 插件
