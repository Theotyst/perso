import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { HexagonsBoardComponent } from './hexagons-board/hexagons-board.component';

import { HexagonService } from './hexagon/hexagon.service'; 


@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    HexagonsBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HexagonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
