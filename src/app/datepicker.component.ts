import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
})
export class DatepickerComponent {
  date = new Date("11/08/2015");
  selectedDate(date: Date) {
    this.date = date;
  }
}
