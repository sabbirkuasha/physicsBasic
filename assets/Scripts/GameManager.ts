import { _decorator, Component, Node } from "cc";
import { StaticInstance } from "./StaticInstance";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  onLoad() {
    console.log("Game manager onLoad");
    StaticInstance.setGameManager(this);
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  update(deltaTime: number) {}
}
