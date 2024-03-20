import { _decorator, Component, Node } from "cc";
import { UIbase } from "./UIbase";
const { ccclass, property } = _decorator;

@ccclass("LevelSelect")
export class LevelSelect extends UIbase {
  @property(Node) backStartButton: Node = undefined;
  @property(Node) levelsRoot: Node = undefined;

  onLoad() {
    super.onLoad();
  }

  start() {}

  update(deltaTime: number) {}
}
