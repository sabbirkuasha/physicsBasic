import { _decorator, Component, instantiate, Label, Node, Prefab } from "cc";
import { StaticInstance } from "./StaticInstance";
import { StartMenu } from "./Ui/StartMenu";
import { UIbase } from "./Ui/UIbase";
import { UIType_enum } from "./Enum";
import { LevelSelect } from "./Ui/LevelSelect";

const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager extends Component {
  @property(Prefab) startMenuPrefab: Prefab = undefined;
  @property(Prefab) levelSelectPrefab: Prefab = undefined;

  private uiMap = new Map<UIType_enum, UIbase>(); // Map object with 'key' and 'value' pair

  onLoad() {
    StaticInstance.setUIManager(this);
    console.log("UIManager : ");
    this.initilizeStartMenu();
    this.initilizeLevelSelctMenu();
  }

  gameStart() {
    console.log("Log from UIManager.ts - Game Start Function");
  }
  gameLevelSelect() {
    console.log("Log from UIManager.ts - gameLevelSelect Function");
    this.showUI([UIType_enum.LevelSelect]);
  }

  gameStartMenu() {
    console.log("Log from UIManager.ts - gameStartMenu Function");
    this.showUI([UIType_enum.StartMenu]);
  }

  start() {
    console.log(StaticInstance.gameManager);
  }

  toLevelSelect() {
    console.log("Show Level Select Menu");
    this.showUI([UIType_enum.LevelSelect]);
  }

  showUI(showTypes: UIType_enum[]) {
    this.uiMap.forEach((ui, type) => {
      if (showTypes.includes(type)) {
        ui.show();
      } else {
        ui.show();
      }
    });
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

    this.uiMap.set(UIType_enum.StartMenu, comp_startMenu);
  }

  private initilizeLevelSelctMenu() {
    const node_startMenu = instantiate(this.levelSelectPrefab);
    this.node.addChild(node_startMenu);
    this.node.setPosition(0, 0);
    // console.log(node_startMenu);
    const comp_levelSelect = node_startMenu.getComponent(LevelSelect);
    // console.log(comp_startMenu);
    console.log(this);
    comp_levelSelect.init(this);

    this.uiMap.set(UIType_enum.LevelSelect, comp_levelSelect);
  }

  update(deltaTime: number) {}
}
