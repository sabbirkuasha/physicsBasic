import { _decorator, Component, Node, Tween, tween } from "cc";
import { UIbase } from "./UIbase";

const { ccclass, property } = _decorator;

@ccclass("StartMenu")
// export class StartMenu extends Component {
export class StartMenu extends UIbase {
  @property(Node)
  startButton: Node = undefined;
  @property(Node)
  levelSeclectionNode: Node = undefined;

  private buttonTween: Tween<Node> | null = null;

  onLoad() {
    console.log("start menu onLoad");
    super.onLoad();
  }
  start() {}

  show() {
    super.show();
  }

  init() {
    console.log("init from startMenu");
  }

  hide() {
    console.log("Hide from Start Menu");
    super.hide();
  }

  onStartBtn() {
    console.log("Log from StartMenu.ts - onStartBtn ");
  }
  onLevelSelectBtn() {
    console.log("Log on Level Selection Button Press");
  }

  update(deltaTime: number) {}
}
