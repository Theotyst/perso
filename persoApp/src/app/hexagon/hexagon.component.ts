import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Position } from 'app/classes/position';
import { HexagonService } from 'app/hexagon/hexagon.service'; 

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements AfterViewInit {

  @Input() public textContent: string;
  @Input() public size: number;
  @Input() public position: Position;
  @Input() public background: string;

  @ViewChild('hexagon') hexagonElement: ElementRef;

  constructor(private hexagonService: HexagonService) { }

  ngAfterViewInit() {
    this.hexagonService.setSize(this.hexagonElement.nativeElement, this.size);
    this.hexagonService.setPosition(this.hexagonElement.nativeElement, this.position);
    this.hexagonService.setBackground(this.hexagonElement.nativeElement, this.background);
  }

}