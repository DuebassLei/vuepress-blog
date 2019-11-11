---
sidebarDepth: 2
---
# :watermelon: Javascript

## 清空对象属性值

```javascript
let obj = {a:1,b:2}
// 1. Object.key枚举所有属性
Object.keys(obj).forEach(key => obj[key]= '');
// 2. for...in循环
for(let key in obj){
         obj[key]  = ''
     }
```

> 区别：
>
> > `Object.keys()` 遍历对象本身所有可枚举的属性，不会再去原型链上寻找，而`for in`会遍历原型链上的属性，一般都要带一个`hasOwnProperty`来判断是否是自己本身持有的属性。

## 对象遍历

### `for ... in` 

> 以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性。

```javascript
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
// 输出:
// obj.a = 1
// obj.b = 2
// obj.c = 3
```

### `Object.keys`

> 用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组。注意它同`for..in`一样不能保证属性按对象原来的顺序输出。（可枚举-自身）

```javascript
// 数组
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 类数组对象-随机下标
var varObj = { 120: 'a', 5: 'b', 8: 'c' };
console.log(Object.keys(varObj)); // console: ['5', '8', '120']
```

### `for...of` 

> 在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Map)，[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)，[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)，[`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

#### :heart: 迭代Array

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

// output:
// 11
// 21
// 31
```

如果你不想修改语句块中的变量 , 也可以使用[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)代替`let`。

```javascript
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

//output:
// 10
// 20
// 30
```

#### :heart: ​迭代String

```javascript
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}

// "b"
// "o"
// "o"

```

#### :heart: 迭代Map

```javascript
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

#### :heart: ​迭代Set

```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

## 对象拷贝

### 方法一： `Object.assign()`

```javascript
//浅拷贝
const a = {a: 1};
const b = {};
Object.assign( b, a)
```

### 方法二 ：`ES6`扩展运算符(`...`)

```javascript
//浅拷贝
const a = {a: 1};
const b = {...a};
```

### 方法三 ：`json`

```javascript
//深拷贝
const obj1 = {a: 1};
const obj2 = JSON.parse(JSON.stringify(obj1));
```

## FormData
>接口提供了一种表示表单数据的键值对的构造方式,如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

### :apple: 新建`FormData`对象并添加数据
```javascript
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');
```

### :apple: FormData.values() 
方法返回一个允许遍历该对象中所有值的 迭代器 。这些值是 `USVString` 或是`Blob`对象。
```javascript
// 获取所有值
for (var value of formData.values()) {
   console.log(value); 
}
//output:
//  value1
//  value2
```
### :apple: 遍历对象属性、值插入FormData
```javascript
      let obj = { 
              userName: "zhang san",
              password: "root1234",
              tel: "8008208820",
              address: "北京",
              email: "test@163.com"
            };
      const formData = new FormData();
      
      Object.keys(obj).forEach(key => {
        formData.append(key, obj[key]);
      });
```

## fetch
### :star: 基本使用
```javascript
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)
  ```

  ### :star: 请求选项
  ```javascript
  fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...),

  headers: {
    'Accept': 'application/json'
  },

  credentials: 'same-origin', // send cookies
  credentials: 'include',     // send cookies, even in CORS

})
  ```
### :star: 与node.js一起使用
```javascript
const fetch = require('isomorphic-fetch')
```

### :star: 响应
```javascript
fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})
```

### :star: 捕捉异常
```javascript
fetch('/data.json')
  .then(checkStatus)


function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}
```
非2xx响应仍然是成功的请求。使用另一个函数将其转换为错误。
>参考
- https://fetch.spec.whatwg.org/
- https://www.npmjs.com/package/whatwg-fetch


