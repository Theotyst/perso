import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonsBoardComponent } from 'app/hexagons-board.component';

describe('HexagonsBoardComponent', () => {
  let component: HexagonsBoardComponent;
  let fixture: ComponentFixture<HexagonsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
