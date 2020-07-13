import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "date-controls",
  templateUrl: "./date-controls.component.html",
  styleUrls: ["./date-controls.component.scss"],
})
export class DateControlsComponent implements OnInit {
  isDaysOpen: boolean = true;
  isYearsOpen: boolean = false;

  constructor() {}
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  today = new Date();
  fullDate: Date = new Date();
  date = null;
  month = null;
  year = null;
  monthName: string;
  @Output() selectedDate = new EventEmitter<string>();
  @Input() initialDate: string = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.initialDate) {
      this.fullDate = new Date(changes.initialDate.currentValue);
      this.monthName = this.months[this.fullDate.getMonth()];
      this.month = this.fullDate.getMonth();
      this.year = this.fullDate.getFullYear();
      this.date = this.fullDate.getDate();
    }
  }
  ngOnInit() {
    // this.monthName = this.months[this.today.getMonth()];
  }

  toggleAccordionDisplay(area: string) {
    this.isDaysOpen = false;
    this.isYearsOpen = false;
    area === "D" ? (this.isDaysOpen = true) : (this.isYearsOpen = true);
  }

  nextMonth() {
    //get the selected date from this.date
    this.month = this.month + 1 > 11 ? this.increaseMonth() : this.month + 1;
    this.monthName = this.months[this.month];
    this.combineDate();
  }

  previousMonth() {
    this.month = this.month - 1 < 0 ? this.decreaseMonth() : this.month - 1;
    this.monthName = this.months[this.month];
    this.combineDate();
  }

  increaseMonth() {
    this.month = this.month + 1 - 12;
    this.year = this.year + 1;
    this.combineDate();
    return this.month;
  }
  decreaseMonth() {
    this.month = this.month - 1 + 12;
    this.year = this.year - 1;
    this.combineDate();
    return this.month;
  }

  getYear(year: number) {
    this.year = year;
    this.combineDate();
  }
  getDate(date: number) {
    this.date = date;
    this.combineDate();
  }

  combineDate() {
    this.selectedDate.emit(this.month + 1 + "/" + this.date + "/" + this.year);
  }
}
