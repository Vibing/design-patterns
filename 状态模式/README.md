## 介绍

这是一种行为设计模式，它允许对象根据对其内部状态的更改来更改其行为。状态模式类返回的对象似乎更改了其类。它为一组有限的对象提供特定于状态的逻辑，其中每种对象类型代表一种特定的状态。

状态模式的核心是：
- 一个对象有状态变化
- 每次状态变化都会触发一个逻辑

## 示例
状态模式需要一个主题类 Context 用来作为状态的载体，这个类记用于 get 和 set 状态;
状态模式需要状态类 State ，里面包含具体的状态变化的逻辑;

在生活中，红绿灯就是状态模式的体现，灯颜色的变化会触发汽车或行人的行为
先定义 State 类，它用于红绿灯颜色变化和相应的逻辑处理：
```js
class State {
  constructor(color){
    this.color = color;
  }
  
  /**
   * 用于处理切换逻辑
   */
  handle(context){
    // 逻辑处理
    console.log(`跳到：${this.color} 灯`)
    // 调用 Context 的 setState 来改变状态
    context.setState(this)
  }
}
```

再看看 Context 类，它抽象出来 用于获取和设置当前 state
```javascript
class Context {
  constructor(){
    this.state = null;
  }
  
  getState(){
    return this.state;
  }

  setState(state){
    this.state = state;
  }
}
```
：
```javascript
class State {
  constructor(){
    this.state = null;
  }
}
```
