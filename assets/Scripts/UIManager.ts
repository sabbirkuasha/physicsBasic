import { _decorator, Component, Label, Node } from "cc";
import { StaticInstance } from "./StaticInstance";
const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component {
  onLoad() {
    StaticInstance.setUIManager(this);
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  update(deltaTime: number) {}
}
