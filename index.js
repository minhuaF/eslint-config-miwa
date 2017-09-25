module.exports = {
  // 设置解析器选项
  parser: 'babel-eslint',    // 默认值esprima，使用babel-eslint能支持jsx
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
  /**
   * 启用的规则以及各自的错误级别
   * 不提示： off == 0
   * 警告  ： warn == 1
   * 错误  ： error == 2
   */
  rules: {
    // ------------------------ 与Javascript代码中的错误或逻辑错误有关 ----------------
    // 禁止在条件语句中出现赋值语句，除非用圆括号括起来
    'no-cond-assign': '2', 
    // 允许使用console
    //'no-console': '',
    // 禁止在条件语句中出现常量表达式
    'no-constant-condition': {
      'checkLoops': true
    },
    // 禁止在 function 定义中出现重复的参数
    'no-dupe-args': '2',
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': '2',
    // 禁止重复case标签
    'no-duplicate-case': '2',
    // 禁止空块语句
    'no-empty': '2',
    // 禁止对 function 声明重新赋值
    'no-func-assign': '2',
    // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable': '2',
    // 强制要求使用 isNaN() 检查 NaN
    //'use-isnan': 'error',
    // 禁止否定关系运算符的左操作数
    // 'no-unsafe-negation': 'error',
    // 禁止在finally语句中出现控制流操作
    //'no-unsafe-finally': 'error',
    // 检测字面量语法 es6
    //'no-template-curly-in-string': 'error',
    // 禁用稀疏数组
    //'no-sparse-arrays': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': '2',
    // 禁止将Math，JSON，Reflect对象当做函数进行调用
    'no-obj-calls': '2',
    // 禁止在 RegExp 构造函数中出现无效的正则表达式
    //'no-invalid-regexp': 'error',
    // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-inner-declarations': ['error', 'both'],
    // 禁止对 function 声明重新赋值
    'no-func-assign': '2',
    // 禁用不必要的分号
    'no-extra-semi': '2',
    // 禁止冗余的括号
    'no-extra-parens': '2',
    // 禁止不必要的布尔类型转换
    //'no-extra-boolean-cast': 'error',
    // 禁止空块语句
    'no-empty': '2',
    // 强制typeof表达式与有效字符串进行比较
    'valid-typeof': {
      'requireStringLiterals': true
    },

    // ---------------------- 最佳实践，建议风格 ----------------
    // 缩进必须为2个空格
    'indent': [ 1, 2 ],
    // 强制数组方法的回调函数中使用return语句
    'array-callback-return': 2,
    // 检测变量在定义范围以外使用
    'block-scoped-var': 2,
    // 限制圈复杂度，目前限制为3 (3个if)
    'complexity': [ 2, {
      'max': 3
    }],
    // TODO 控制return时是否指定值
    // 'consistent-return' : 2,
    // 要求遵循大括号约定
    'curly': [ 2, 'multi' ],
    // 要求Switch语句中有Default分支， 若没有，则加上 //no default
    'default-case': 2,
    // 关闭在点号前后换行
    'dot-location': 0,
    // 使用点号来访问属性
    'dot-notation': [ 2, {
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }],
    // 要求使用 === 和！==
    'eqeqeq': [ 2, 'always'],
    'guard-for-in': 2,
    'no-alert': 0,
    // 禁用已启用的代码和次优代码
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 1,
    'no-empty-function': 2,
    // TODO
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    // TODO
    'no-eval': [ 2, {
      'allowIndirect': true
    }],
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': [ 2, {
      'commentPattern': 'break[\\s\\w]*omitted"'
    }],
    'no-floating-decimal': 0,
    


  }
}