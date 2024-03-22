import { _decorator, Component, instantiate, Label, Node, Prefab } from "cc";
import { StaticInstance } from "./StaticInstance";
import { StartMenu } from "./Ui/StartMenu";

const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component {
  @property(Prefab) startMenuPrefab: Prefab = undefined;
  @property(Prefab) levelSelectPrefab: Prefab = undefined;

  onLoad() {
    StaticInstance.setUIManager(this);
    console.log("UIManager : ");
    this.initilizeStartMenu();
  }

  gameStart() {
    console.log("Log from UIManager.ts - Game Start Function");
  }
  gameLevelSelect() {
    console.log("Log from UIManager.ts - gameLevelSelect Function");
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  private initilizeStartMenu() {
    const node_startMenu = instantiate(this.startMenuPrefab);
    this.node.addChild(node_startMenu);
    this.node.setPosition(0, 0);
    // console.log(node_startMenu);
    const comp_startMenu = node_startMenu.getComponent(StartMenu);
    // console.log(comp_startMenu);
    console.log(this);
    comp_startMenu.init(this);
  }

  update(deltaTime: number) {}
}
