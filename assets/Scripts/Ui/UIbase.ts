import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("UIbase")
export class UIbase extends Component {
  @property({
    displayName: "Hello",
  })
  isShowInit: boolean = false;
  onLoad() {
    console.log("UIBase onLoad");
    this.isShowInit ? this.show() : this.hide();
  }
  start() {}

  show() {
    this.node.active = true;
    console.log("show function");
  }
  hide() {
    console.log("hide function");
    this.node.active = false;
  }
  update(deltaTime: number) {}
}
