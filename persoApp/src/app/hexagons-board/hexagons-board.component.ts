import { Component, OnInit } from '@angular/core';
import { HexagonData } from 'app/hexagons-board/hexagonData';
import { hexagonsBoardConstants } from 'app/hexagons-board/hexagons-board.constant'


@Component({
  selector: 'app-hexagons-board',
  templateUrl: './hexagons-board.component.html',
  styleUrls: ['./hexagons-board.component.scss']
})
export class HexagonsBoardComponent implements OnInit {

  private hexagonsData: HexagonData[];

  constructor() { }

  ngOnInit() {
    this.hexagonsData = hexagonsBoardConstants.hexagons;
  }

}
