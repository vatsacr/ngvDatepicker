import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DaysComponent } from "./days/days.component";
import { YearsComponent } from "./years/years.component";
import { DateControlsComponent } from "./date-controls/date-controls.component";
import { PaginatorComponent } from "./paginator/paginator.component";

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    YearsComponent,
    DateControlsComponent,
    PaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
