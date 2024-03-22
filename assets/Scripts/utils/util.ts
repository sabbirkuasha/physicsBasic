import { _decorator, Component, Node, Tween, tween, Vec3 } from "cc";

export class Util {
  static clickDownTween(node: Node | undefined) {
    if (!node) {
      return;
    }

    tween(node)
      .to(
        0.2,
        {
          position: new Vec3(node.position.x, node.position.y + 100, 0),
          angle: 20,
          scale: new Vec3(node.scale.x + 5, node.scale.y + 5, node.scale.z),
        },
        { easing: "sineOutIn" }
      )
      .to(0.2, {
        position: new Vec3(node.position.x, node.position.y),
        angle: 0,
        scale: new Vec3(node.scale.x, node.scale.y, node.scale.z),
      })
      .start();
  }
  static clickUpTween(node: Node | undefined) {
    if (!node) {
      return;
    }

    tween(node)
      .to(
        0.2,
        {
          position: new Vec3(node.position.x, node.position.y, 0),
          angle: 0,
          scale: new Vec3(node.scale.x, node.scale.y, node.scale.z),
        },
        { easing: "sineOutIn" }
      )
      .to(0.2, {
        position: new Vec3(node.position.x, node.position.y),
        angle: 0,
        scale: new Vec3(node.scale.x, node.scale.y, node.scale.z),
      })
      .start();
  }
}
