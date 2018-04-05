import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {

  @Input() public textContent: string;

  constructor() { }

  ngOnInit() {
  }

}
