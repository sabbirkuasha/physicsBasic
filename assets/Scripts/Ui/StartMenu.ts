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

    const node = this.startButton.parent.children[1];
    console.log(node);
    node.angle = 0;

    // Start a new tween
    this.buttonTween = tween(node)
      .repeatForever(tween().to(1, { angle: 15 }).to(1, { angle: 0 }))
      .start();

    // Stop the existing tween if it's running
    this.buttonTween.stop();
  }

  init() {
    console.log("init from startMenu");
  }

  hide() {
    console.log("Hide from Start Menu");
    super.hide();
  }

  update(deltaTime: number) {}
}
