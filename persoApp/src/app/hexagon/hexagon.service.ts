import { Injectable } from "@angular/core";
import { Position } from "app/classes/position";

@Injectable()
export class HexagonService {

  constructor() {}

  public setSize(element: any, size: number) {
    element.style.width = size/2 + "%";
    element.style.paddingBottom = 1.732*size/2 + "%";
  }

  public setPosition(element: any, position: Position) {
    element.style.left = position.x + "%";
    element.style.top = position.y + "%"; 
  }

  public setBackground(element: any, background: string, overrideDefaultPosition?: boolean) {
    element.style.background = background + (overrideDefaultPosition ? "" : " center center / 200% no-repeat");
  }

  public setZIndex(element: any, zIndex: number) {
    element.style.zIndex = zIndex;
  }

}