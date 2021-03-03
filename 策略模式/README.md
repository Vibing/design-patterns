## 定义

它属于**行为设计模式**，定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换

一个基于策略模式的程序至少由两部分组成：

- 一组策略类，策略类封装了具体的算法，并负责具体的计算过程
- 环境类 Context， Context 接受客户的请求，随后把请求委托给某一个策略类

要做到这点，说明 Context 中要维持对某个策略对象的引用；

## 示例

条条大路通罗马，现在人们出去旅游会选择各种方式，这里通过策略模式来完成不同需求下的旅游

先建立几组策略类，这些策略是旅游出行的方式，有的人有时间选择徒步，有的人旅游地方远或时间紧就选飞机，有的人享受自驾：

```javascript
/**
 * 定义多个策略类 每个策略算法不同
 */
class Foot {
  trigger() {
    console.log('时间很长 徒步旅行');
  }
}

class Car {
  trigger() {
    console.log('开车自驾游');
  }
}

class Plain {
  trigger() {
    console.log('地方远时间紧 飞机旅游');
  }
}
```

具体的策略有了，现在需要一个环境类 Context 来接收策略，根据不同场景委托给对应的策略：

```javascript
/**
 * 定义环境类 接收请求 把请求委托给策略类 让策略类去处理
 * @class Context
 */
class Context {
  constructor(stragegieInstance) {
    // 传入具体某个策略实例
    this.stragegieInstance = stragegieInstance;
  }

  handle() {
    this.stragegieInstance.trigger();
  }
}
```

此时根据不同请求来委托不同的策略：

```javascript
// Context根据不同请求 来使用不同的策略
// 案例1：我有很长时间，想徒步看世界 则使用 Foot 策略
const FootInstance = new Foot();
const context = new Context(FootInstance);
context.handle();

// 案例2：我想自驾旅游 则使用 Car 策略
const CarInstance = new Car();
const context = new Context(CarInstance);
context.handle();

// 案例3：旅游地方远时间也紧 则使用 Plain 策略
const PlainInstance = new Plain();
const context = new Context(PlainInstance);
context.handle();
```

## 总结

策略模式的核心是：通过一个 Context 类接收请求，将请求委托给具体的策略类

实际开发中使用策略模式的地方很多，比如表单验证有很多验证策略，比如页面要根据不同的用户显示不同的内容，这也是策略模式
