import { Component, OnInit } from '@angular/core';
import { HexagonData } from './hexagonData';
import { hexagonsBoardConstants } from './hexagonsBoard.constant'


@Component({
  selector: 'app-hexagons-board',
  templateUrl: './hexagons-board.component.html',
  styleUrls: ['./hexagons-board.component.scss']
})
export class HexagonsBoardComponent implements OnInit {

  private hexagonsData: HexagonData[];

  constructor() { }

  ngOnInit() {
    this.hexagonsData = [];
    hexagonsBoardConstants.hexagons.forEach((hexagon) => {
      this.hexagonsData.push(new HexagonData(hexagon.textContent, hexagon.size, hexagon.position));
    });
  }

}
