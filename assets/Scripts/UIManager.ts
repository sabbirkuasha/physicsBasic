import { _decorator, Component, instantiate, Label, Node, Prefab } from "cc";
import { StaticInstance } from "./StaticInstance";
import { StartMenu } from "./Ui/StartMenu";
import { UIbase } from "./Ui/UIbase";
import { UIType } from "./Enum";
import { LevelSelect } from "./Ui/LevelSelect";

const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component {
  @property(Prefab) startMenuPrefab: Prefab = undefined;
  @property(Prefab) levelSelectPrefab: Prefab = undefined;

  private uiMap = new Map<UIType, UIbase>();

  onLoad() {
    StaticInstance.setUIManager(this);
    console.log("uiMap: ", this.uiMap);

    this.initStartMenu();
    if (this.levelSelectPrefab) {
      this.initLevelSelect();
    }
  }

  gameStart() {
    console.log("Log from UIManager.ts - Game Start Function");
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  update(deltaTime: number) {}

  toLevelSelect() {
    this.showUI([UIType.LevelSelect]);
  }

  showUI(showTypes: UIType[]) {
    console.log(showTypes);
    this.uiMap.forEach((ui, type) => {
      if (showTypes.includes(type)) {
        ui.show();
      } else {
        ui.hide();
      }
    });
  }

  private initStartMenu() {
    const node = instantiate(this.startMenuPrefab);
    this.node.addChild(node);
    node.setPosition(0, 0);
    const comp = node.getComponent(StartMenu);
    console.log(comp);
    comp.init();
    console.log("uiMap", this.uiMap);
    this.uiMap.set(UIType.StartMenu, comp);
    console.log("uiMap", this.uiMap);
  }

  private initLevelSelect() {
    const node = instantiate(this.levelSelectPrefab);
    this.node.addChild(node);
    node.setPosition(0, 0);
    const comp = node.getComponent(LevelSelect);
    console.log(comp);
    comp.init();
    console.log("uiMap", this.uiMap);
    this.uiMap.set(UIType.LevelSelect, comp);
    console.log("uiMap", this.uiMap);
  }
}
