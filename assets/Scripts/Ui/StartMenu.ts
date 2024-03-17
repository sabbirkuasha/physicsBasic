import { _decorator, Component, Node } from "cc";
import { UIbase } from "./UIbase";
const { ccclass, property } = _decorator;

@ccclass("StartMenu")
// export class StartMenu extends Component {
export class StartMenu extends UIbase {
  @property(Node)
  startButton: Node = undefined;
  @property(Node)
  levelSeclectionNode: Node = undefined;

  onLoad() {
    console.log("start menu onLoad");
    super.onLoad();
  }
  start() {}

  init() {
    console.log("init from startMenu");
  }

  hide() {
    console.log("Hide from Start Menu");
    super.hide();
  }

  update(deltaTime: number) {}
}
