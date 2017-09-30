/**
 * TODO 规则间可能会有冲突
 */

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
    'indent': [ 1, 2, {
      'SwitchCase': 1
    }],
    // 强制数组方法的回调函数中使用return语句
    'array-callback-return': 2,
    // 检测变量在定义范围以外使用
    'block-scoped-var': 2,
    // 限制圈复杂度，目前限制为3 (3个if)
    'complexity': [ 2, {
      'max': 3,
      'MemberExpression': 1
    }],
    // TODO 控制return时是否指定值
    // 'consistent-return' : 2,
    // 要求遵循大括号约定
    'curly': [ 2, 'multi' ],
    // 要求Switch语句中有Default分支， 若没有，则加上 //no default
    'default-case': 2,
    // 关闭在点号前后换行
    //'dot-location': 0,
    // 使用点号来访问属性
    // 'dot-notation': [ 2, {
    //   'allowPattern': '^[a-z]+(_[a-z]+)+$'
    // }],
    // 要求使用 === 和！==
    //'eqeqeq': [ 2, 'always'],
    //'guard-for-in': 2,
    'no-alert': 0,
    // 禁用已启用的代码和次优代码
    'no-caller': 2,
    // 不允许在 case 子句中使用词法声明
    //'no-case-declarations': 2,
    'no-div-regex': 2,
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 1,
    // 禁止出现空函数
    'no-empty-function': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 1,
    // 禁用 eval()
    'no-eval': [ 2, {
      'allowIndirect': true
    }],
    //'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    // 禁用不必要的标签
    'no-extra-label': 2,
    // 禁止 case 语句落空
    'no-fallthrough': [ 2, {
      'commentPattern': 'break[\\s\\w]*omitted"'
    }],
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 0,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止循环中存在函数
    'no-loop-func': 2,
    // 禁用魔术数字
    'no-magic-numbers':[2, {
      'ignoreArrayIndexes': true
    }],
    // 禁止使用多个空格
    'no-multi-spaces':[2,{
      'ignoreEOLComments': true
    }],
    // 禁止多次声明同一变量
    'no-redeclare': [2, { 
      'builtinGlobals': true 
    }],
    // 禁止自身赋值
    'no-self-assign': [2, {
      props: true
    }],
    // 禁用未使用过的标签
    'no-unused-labels': 2,
    // 不允许在 catch 语句中遮盖变量
    'no-catch-shadow': 2,
    // 禁用与变量同名的标签
    'no-label-var': 2,
    // 禁止变量声明覆盖外层作用域的变量
    'no-shadow': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 不允许使用undefined变量
    'no-undefined': 2,
    // 禁止在变量定义之前使用它们 函数、类、变量
    'no-use-before-define':[2, {
      'functions': true, 
      'classes': true,
      'variables': true
    }],
    // ----------------------Node.js and CommonJS ----------------
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // ---------------------- 编码风格 ----------------
    /**
     * 主观因素比较多，有不合理的及时修改
     */
    'arrary-bracket-newline':[2, 'always', {
      'singleValue': false,
      'objectsInArrays': false,
      'arrarysInArrays': false
    }],
    'block-spacing': [2, 'never'],
    // 强制 if-else中的else语句，连同catch 和 finally，都必须在右括号后另起一行
    'brace-style': [2, 'stroustrup'],
    // 要求使用骆驼拼写法
    'camelcase': 2,
    //TODO 强制在对象和数组字面量中使用一致的拖尾逗号，不兼容IE8
    'comma-dangle': [2, 'always'],
    // 强制在逗号前不使用逗号，在逗号后要使用逗号
    'camma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 逗号位置 (默认)
    'comma-style': [2, 'last'],
    // function 定义括号前不需要空格
    'func-call-spacing': [2, 'always'],
    // 强制块语句的最大可嵌套深度 4
    'max-depth': [2, 4],
    // 强制行的最大长度（按照惯例80个字符）
    'max-len': [2, 80],
    // 设置文件的最大行数威500行，忽略空白行，忽略注释行
    'max-lines':[2, {
      'max': 500,
      'skipBlankLines': true,
      'skipComments': true
    }],
    // 设置回调嵌套深度5
    'max-nested-callbacks': [2, 5],
    // 设置函数定义的参数最大个数为5，超过了会警告
    'max-params': [1, 5],
    // 设置一个函数中最大行数，设置为30，超过了会警告，建议抽离
    'max-statements': [1, 30],
    // 设置每一行所允许的最大语句数量，与上面的设置数字数量有不同
    'max-statements-per-line': [1, {
      'max':2
    }],
    // 调用函数时 制定函数名大小写
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': true
    }],
    // TODO 禁止使用Array构造函数
    'no-array-constructor': [ 0 ],
    // 禁止使用按位操作符
    'no-bitwise': [2],
    // 使用 continue 时给警告
    'no-continue': [1]
    

  }
}