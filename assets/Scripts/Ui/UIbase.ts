import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("UIbase")
export class UIbase extends Component {
  @property({
    displayName: "Show Menu",
  })
  isShowInit: boolean = false;

  onLoad() {
    console.log("UIBase onLoad");
    console.log("isShowInit: ", this.isShowInit);
    this.isShowInit ? this.show() : this.hide();
  }
  start() {}

  show() {
    this.node.active = true;
  }

  hide() {
    this.node.active = false;
  }
  update(deltaTime: number) {}
}

// 1. Show hide ui StartMenu-Node prefab if show menu is true
