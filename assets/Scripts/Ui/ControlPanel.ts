import { _decorator, Component, Node } from "cc";
import { UIbase } from "./UIbase";
const { ccclass, property } = _decorator;

@ccclass("ControlPanel")
export class ControlPanel extends UIbase {
  @property(Node) clickDownBtn: Node = undefined;
  @property(Node) clickDown2Btn: Node = undefined;
  @property(Node) clickLeftBtn: Node = undefined;
  @property(Node) clickRightBtn: Node = undefined;
  @property(Node) panelBgBtn: Node = undefined;
  @property(Node) panelMidBtn: Node = undefined;

  onLoad() {
    console.log("from control panel");
    super.onLoad();
  }

  start() {}

  update(deltaTime: number) {}
}
