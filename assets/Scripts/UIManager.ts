import { _decorator, Component, instantiate, Label, Node, Prefab } from "cc";
import { StaticInstance } from "./StaticInstance";
import { StartMenu } from "./Ui/StartMenu";
import { UIbase } from "./Ui/UIbase";
const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component {
  @property(Prefab)
  startMenuPrefab: Prefab = undefined;

  uiMap = new Map<string, UIbase>();

  onLoad() {
    StaticInstance.setUIManager(this);

    this.initStartMenu();
  }

  private initStartMenu() {
    const node = instantiate(this.startMenuPrefab);
    this.node.addChild(node);
    node.setPosition(0, 0);
    const comp = node.getComponent(StartMenu);
    comp.init();
    this.uiMap.set("startMenu", comp);
    console.log(this.uiMap);
  }

  gameStart() {
    console.log("Log from UIManager.ts - Game Start Function");
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  update(deltaTime: number) {}
}
