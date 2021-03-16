// 使用状态模式实现简单的Promise 
/**
 * Promise是一个有限状态机 pending(准备) fullfilled(成功) rejected(失败)
 * pending -> fullfilled 或 pending -> rejected
 * 不可逆向变化
 */
class MyPromise {
  constructor(fn) {


    fn(() => {
      fsm.resolve(this)
    }, () => {
      fsm.reject(this)
    })
  }
}