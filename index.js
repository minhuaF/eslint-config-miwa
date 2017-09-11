module.exports = {
  // 设置解析器选项
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion' : 6,       // 设置想使用的ECMAScript版本，默认3,4
    'sourceType': 'module',  // 默认值script，若代码是ECMAScript模块的话，使用的是“module
    'ecmaFeatures' : {       // 设置额外的语言特征
      'jsx' : true
    }
  },
  extends: [
    'standard',
    'standard-react'
  ],
  //脚本运行的环境
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },
  // 设置全局变量
  globals: {},
  // 使用第三方插件
  plugins: {},
  // 启用的规则以及各自的错误级别
  rules: {
    // 禁止在条件语句中出现赋值语句，除非用圆括号括起来
    'no-cond-assign': 'except-parens', 
    // 允许使用console
    'no-console': ''
    
  }
}