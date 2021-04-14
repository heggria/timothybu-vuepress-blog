---
title: this
---

# this 的指向

- **默认情况下 `this` 永远指向最后调用它的那个对象，即执行时 `this`。**

- **箭头函数的 `this` 始终指向函数定义时的 `this`，而非执行时。**

> 箭头函数中没有 `this` 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 `this` 绑定的是最近一层非箭头函数的 `this`，否则，`this` 为 `undefined`。

- **`_this = this`，保存函数定义时 this 的引用。**

- **使用 `apply`、`call`、`bind`**

- **`new` 实例化一个对象**

```js
obj.myFun.call(db);
obj.myFun.apply(db);
obj.myFun.bind(db)();
```

## `apply()`

重定义 this，传入一个数组，数组里面有逗号分隔的参数，返回函数执行结果。

## `call()`

重定义 this，传入逗号分隔的参数，返回函数执行结果。

## `bind()`

重定义 this，传入逗号分隔的参数，返回函数本身。
