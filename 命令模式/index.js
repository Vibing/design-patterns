// 将军作为 Invoker 是命令触发者
// 小号手 Command 作为命令传达者
// 士兵 Receiver 作为接收者 执行接收的命令

// 接收者
class Receiver {
  exec() {
    console.log('执行');
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  cmd() {
    console.log('执行命令');
    this.receiver.exec()
  }
}

// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }

  invoke() {
    console.log('开始');
    this.command.cmd()
  }
}

// 士兵
const solder = new Receiver();
// 小号手
const trumpeter = new Command(solder)
// 将军
const general = new Invoker(trumpeter);
// 将军发布命令给号手  号手通知对应的命令接收者去执行命令
general.invoke();
