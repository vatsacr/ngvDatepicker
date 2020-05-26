import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "days",
  templateUrl: "./days.component.html",
  styleUrls: ["./days.component.scss"],
})
export class DaysComponent implements OnChanges {
  daysArray = new Array();
  //today = new Date();
  day: number = null;
  @Input() month: string = "";
  @Input() year: number = null;
  @Output() sendDate = new EventEmitter<number>();
  @Input() fullDate: number = null;
  //day_names = ["S", "M", "T", "W", "T", "F", "S"];
  days = this.daysInMonth(this.month + 1, this.year);
  day_number = new Date("05/01/2020").getDay();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.month) {
      this.month = changes.month.currentValue;
      this.daysInMonth(this.month + 1, this.year);
    }
    if (changes.year) {
      this.year = changes.year.currentValue;
      this.daysInMonth(this.month + 1, this.year);
    }
    if (changes.fullDate) {
      this.day = changes.fullDate.currentValue;
    }
  }

  daysInMonth(month, year) {
    this.daysArray = [];
    let monthNumber = new Date(year, month, 0).getDate();
    for (let i = 1; i <= monthNumber; i++) {
      this.daysArray.push(i);
    }
  }

  setActive(day: number) {
    return day === this.day;
  }

  setDay(day: number) {
    this.day = day;
    this.sendDate.emit(this.day);
  }
}
