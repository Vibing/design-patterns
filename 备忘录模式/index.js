// youtobe： https://www.youtube.com/watch?v=G6C8VwjraiY&list=PL9nxfq1tlKKkfCNnYKoC2yvSy4jo1AsoD&index=65

// 保存对象的某个状态 适当的时候可以撤销

// 备忘类
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  // 传入备忘类实例
  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

// 编辑器
class Editor {
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  saveContentToMemento() {
    return new Memento(this.content)
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}


// 测试代码
const editor = new Editor();
const careTaker = new CareTaker();

editor.setContent('111');
editor.setContent('222')
careTaker.add(editor.saveContentToMemento()) //将当前内容备份

editor.setContent('333')
careTaker.add(editor.saveContentToMemento()) //将当前内容备份
editor.setContent('444')

editor.getContent()
editor.getContentFromMemento(careTaker.get(1)) // 撤销

editor.getContent()
editor.getContentFromMemento(careTaker.get(0)) // 撤销

