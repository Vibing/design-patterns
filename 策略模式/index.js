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
    console.log('周边风景不错 开车自驾游')
  }
}

class Plain {
  trigger() {
    console.log('地方远时间紧 飞机旅游')
  }
}

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