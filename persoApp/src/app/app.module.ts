import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from 'app/app.component';
import { HexagonComponent } from 'app/hexagon/hexagon.component';
import { HexagonsBoardComponent } from 'app/hexagons-board/hexagons-board.component';

import { HexagonService } from 'app/hexagon/hexagon.service'; 


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
