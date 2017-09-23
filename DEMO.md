
#### default-case
> 要求所有 `switch` 语句中必须包含 `default` 分支，即使默认分支上没有人和逻辑。

```javascript
switch (foo) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomrthing();
    break;
  default：
    // do nothing
}
```

#### dot-notation 
> 要求使用点号来访问属性，不使用方括号

```javascript
let obj = {}
obj.foo = 1
obj.bar_test = 2

```

#### eqeqeq
> 要求使用 === 和 !==

```javascript
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

#### guard-for-in
> `for in` 遍历对象会把原型链继承来的属性也包括进来，防止导致不必要的错误，需要在 `for in` 中使用 `if`

```javascript 
for ( key in foo ) {
  // hasOwnProperty 方法用来检测一个对象是否含有特定的自身属性，会忽略调从原型链继承到的属性
  if ( Object.prototype.hasOwnProperty.call(foo, key) ) {
    doSomething(key)
  }
}

```

#### no-case-declarations
> 避免访问未经初始化的词法绑定以及跨case语句访问被提升的函数

```javascript
const initalData = {}
switch (foo) {
  case 1: {
    let x = 1
    break
  }
  case 2: {
    console.log(initaiData)
    break
  }
  default: {
    doSomething()
  }
}

```

#### no-dev-regex
> 要求正则表达式字面量避开除法操作符。
```javascript
// error
function bar() { return /=foo/; }

// right
function bar() { return /\=foo/; }

```

#### no-else-return
> 该规则旨在突出含有 return 语句的 if 语句后的不必要的代码。因此，当else 语句出现在含有 return 语句的 if 语句之后，该规则将发出警告，不报错。

```javascript
// warnning
function foo() {
  if(x) {
    return y
  } else {
    return x
  }
}

// right

function foo() {
  if(x) {
    return y
  }
  return x
}

```

#### no-empty-function
> 空函数会减低代码可读性，故应该避免出现空函数，若有必要应加一句注释。若出现空函数会报错
```javascript
// error 
let obj = {
  foo : () => {}
}

// right 
let obj = {
  foo : () => {
    // doSomething()
  }
}

```

#### no-empty-pattern
> 标记出在解构对象和数组中的任何的空模式，每当遇到一个空模式，该规则就会报错
```javascript
// error
let {} = foo
let { a: {} } = foo

// right
let { a={} } = foo
```

#### no-eq-null
> 确保与 null 比较时只等于 null，而不同时等于 undefined， 来减少潜在的 bug 和 意外行为。
```javascript
// error
if ( foo == null ) {
  doSomething()
}

// right
if ( foo === null ) {
  doSomething()
}
```

<!--#### no-eval 
> 使用`eval()`有风险，允许间接调用`eval`，降低危害性

```javascript
// error
var foo = eval
foo('let a = 0')

// right

```-->

#### no-extend-native
> 禁止扩展原生对象，强制使用这规则，则在`for`语句中需提添加 `Object.hasOwnproperty(key)`来避免问题出现。
```javascript
// error

Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });

```

#### no-extra-bind
> 此规则目的在于避免不必要的 bind() 使用，并且当立即执行的函数表达式 (IIFE) 使用 bind()，但是没有一个合适的 this 值时，该规则会发出警告。此规则不会标记有函数参数绑定的bind() 的使用情况。
```javascript
// error
var x = function () {
  foo()
}.bind(bar)

// right
var x = function() {
  this.foo()
}.bind(bar)

```

#### no-extra-label
> 消除不必要的标签
```javascript
// error
while (a) {
  break A
}

// right
while (a) {
  break
}
```

#### no-fallthrough
> 该规则旨在消除非故意 case 落空行为。因此，它会标记处没有使用注释标明的落空情况。
```javascript
// error
switch(foo) {
  case 1:
    doSomething()

  case 2:
    doSomething()
}

// right
switch(foo) {
  case 1:
    doSomething()
    break
  case 2:
    doSomething()
}

switch(foo) {
  case 1:
    doSomething()
    // break omitted
  case 2:
    doSomething()
}

```