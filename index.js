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
  extends: 'eslint:recommended',
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
    // ------------------------ 与Javascript代码中的错误或逻辑错误有关 ----------------
    // 禁止在条件语句中出现赋值语句，除非用圆括号括起来
    'no-cond-assign': 'except-parens', 
    // 允许使用console
    'no-console': '',
    // 禁止在条件语句中出现常量表达式
    'no-constant-condition': {
      'checkLoops': true
    },
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',
    // 禁止重复case标签
    'no-duplicate-case': 'error',
    // 强制typeof表达式与有效字符串进行比较
    'valid-typeof': {
      'requireStringLiterals': true
    },
    // 强制要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',
    // 禁止否定关系运算符的左操作数
    'no-unsafe-negation': 'error',
    // 禁止在finally语句中出现控制流操作
    'no-unsafe-finally': 'error',
    // 检测字面量语法 es6
    'no-template-curly-in-string': 'error',
    // 禁用稀疏数组
    'no-sparse-arrays': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',
    // 禁止将Math，JSON，Reflect对象当做函数进行调用
    'no-obj-calls': 'error',
    // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-invalid-regexp': 'error',
    // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-inner-declarations': ['error', 'both'],
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',
    // 禁用不必要的分号
    'no-extra-semi': 'error',
    // 禁止冗余的括号
    'no-extra-parens': 'error',
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 禁止空块语句
    'no-empty': 'error',

    // ---------------------- 最佳实践，建议风格 ----------------
    // 缩进必须为2个空格
    'indent': [ 'warn', 2 ],
  }
}