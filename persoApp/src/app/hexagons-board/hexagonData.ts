export class Position {
  x: number;
  y: number;
}

export class HexagonData {
  textContent: string;
  size: number;
  position: Position;
  CSSClasses: string[];

  constructor(textContent, size, position){
    this.CSSClasses = ['hexagon-size-'+size, 'left-'+position.x, 'top-'+position.y];
  }
  
}