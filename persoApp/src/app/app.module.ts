import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { HexagonsBoardComponent } from './hexagons-board/hexagons-board.component';


@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    HexagonsBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
