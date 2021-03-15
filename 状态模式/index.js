class Context {
  constructor() {
    this.state = null;
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state;
  }
}


class State {
  constructor(color) {
    this.color = color
  }

  handle(context) {
    console.log(`跳到：${this.color}了`)
    context.setState(this)
  }
}

// use
const context = new Context();

// 红灯
const redLight = new State('红灯')
redLight.handle(context) // 跳到红灯了

// 绿灯
const redLight = new State('绿灯')
redLight.handle(context) // 跳到绿灯了

// 黄灯
const redLight = new State('黄灯')
redLight.handle(context) // 跳到黄灯了