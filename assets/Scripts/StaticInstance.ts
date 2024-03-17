// import { _decorator, Component, Node } from 'cc';
// const { ccclass, property } = _decorator;

import { GameManager } from "./GameManager";
import { UIManager } from "./UIManager";

// @ccclass('StaticInstance')
// export class StaticInstance extends Component {
//     start() {

//     }

//     update(deltaTime: number) {

//     }
// }

export class StaticInstance {
  static gameManager: GameManager | undefined = undefined;
  static uiManager: UIManager | undefined = undefined;

  static setGameManager(context: GameManager) {
    StaticInstance.gameManager = context;
  }

  static setUIManager(context: UIManager) {
    StaticInstance.uiManager = context;
  }
}
