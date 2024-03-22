import { _decorator, Component, Node, Tween, tween, Vec3 } from "cc";
import { UIbase } from "./UIbase";
import { Util } from "../utils/util";
import { UIManager } from "../UIManager";

const { ccclass, property } = _decorator;

@ccclass("StartMenu")
// export class StartMenu extends Component {
export class StartMenu extends UIbase {
  // Property Nodes will be availbale as input field inside this node
  @property(Node) startButton: Node = undefined;
  @property(Node) levelSeclectionNode: Node = undefined;

  //
  private buttonTween: Tween<Node> | null = null;

  onLoad() {
    console.log("start menu onLoad");
    super.onLoad();
  }
  start() {}

  show() {
    super.show(); // Show the "StartMenu-Node" Prefab | "super" is coming from "UIbase", since this script is extends to "UIbase"

    const childOfStartButton = this.startButton.children[0]; // Get the first child of startButton which is ideally "Forward" sprite inside "Play-btn"

    tween(childOfStartButton)
      .repeatForever(tween().to(1, { angle: 20 }).to(1, { angle: -20 }))
      .start();
  }

  init(uiManager: UIManager) {
    console.log("init from startMenu");

    const { TOUCH_START, TOUCH_END, TOUCH_CANCEL } = Node.EventType;

    // Handle button interaction programmatically - GameStartButton
    this.startButton.on(
      TOUCH_START,
      () => {
        Util.clickDownTween(this.startButton, () => {
          uiManager.gameStart();
        });
      },
      this
    );
    this.startButton.on(
      TOUCH_END,
      () => {
        // uiManager.gameStart();
        // Util.clickDownTween(this.startButton);
      },
      this
    );
    this.startButton.on(
      TOUCH_CANCEL,
      () => {
        Util.clickUpTween(this.startButton);
      },
      this
    );

    // Handle button interaction programmatically - GameLevelSelect
    this.levelSeclectionNode.on(
      TOUCH_START,
      () => {
        Util.clickDownTween(this.levelSeclectionNode, () => {
          uiManager.gameLevelSelect();
        });
      },
      this
    );
    this.levelSeclectionNode.on(
      TOUCH_END,
      () => {
        // uiManager.gameLevelSelect();
        // Util.clickDownTween(this.levelSeclectionNode);
      },
      this
    );
    this.levelSeclectionNode.on(
      TOUCH_CANCEL,
      () => {
        Util.clickUpTween(this.levelSeclectionNode);
      },
      this
    );
  }

  hide() {
    super.hide(); // Hide the "StartMenu-Node" Prefab | "super" is coming from "UIbase", since this script is extends to "UIbase"
  }

  onStartBtn() {
    console.log("Log from StartMenu.ts - onStartBtn ");
  }
  onLevelSelectBtn() {
    console.log("Log on Level Selection Button Press");
  }

  update(deltaTime: number) {}
}
