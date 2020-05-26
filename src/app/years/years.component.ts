import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "years",
  templateUrl: "./years.component.html",
  styleUrls: ["./years.component.scss"],
})
export class YearsComponent {
  years: Array<number> = new Array<number>();
  today = new Date();
  @Output() sendYear = new EventEmitter<string>();
  @Input() receivedYear = null;
  constructor() {}

  setYear(year) {
    this.receivedYear = year;
    this.sendYear.emit(year);
  }

  selectedYear(year) {
    return year === this.receivedYear;
  }

  getCurrentYears(years: Array<number>) {
    this.years = years;
  }
}
