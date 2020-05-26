import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { DatepickerComponent } from "./datepicker.component";
import { DaysComponent } from "./days/days.component";
import { YearsComponent } from "./years/years.component";
import { DateControlsComponent } from "./date-controls/date-controls.component";
import { PaginatorComponent } from "./paginator/paginator.component";

@NgModule({
  declarations: [
    DatepickerComponent,
    DaysComponent,
    YearsComponent,
    DateControlsComponent,
    PaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [DatepickerComponent],
})
export class DatepickerModule {}
