import { _decorator, Component, Node } from "cc";
import { UIbase } from "./UIbase";
import { UIManager } from "../UIManager";
import { Util } from "../utils/util";
const { ccclass, property } = _decorator;

@ccclass("LevelSelect")
export class LevelSelect extends UIbase {
  @property(Node) back2StartButton: Node = undefined;
  @property(Node) levelsRoot: Node = undefined;

  onLoad() {
    super.onLoad();
  }

  show() {
    super.show();
  }

  init(uiManager: UIManager) {
    const { TOUCH_START, TOUCH_END, TOUCH_CANCEL } = Node.EventType;

    // Handle button interaction programmatically - GameStartButton
    this.back2StartButton.on(
      TOUCH_START,
      () => {
        Util.clickDownTween(this.back2StartButton, () => {
          uiManager.gameStartMenu();
        });
      },
      this
    );
    this.back2StartButton.on(
      TOUCH_END,
      () => {
        // uiManager.gameStart();
        // Util.clickDownTween(this.back2StartButton);
      },
      this
    );
    this.back2StartButton.on(
      TOUCH_CANCEL,
      () => {
        Util.clickUpTween(this.back2StartButton);
      },
      this
    );
  }

  start() {}

  update(deltaTime: number) {}
}
