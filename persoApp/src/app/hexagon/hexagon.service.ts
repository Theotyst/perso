import { Injectable } from "@angular/core";
import { Position } from "../classes/position";

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

}