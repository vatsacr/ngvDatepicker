import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  arr: Array<number> = new Array<number>();
  constructor() {}
  @Output() sendCurrentYears = new EventEmitter<Array<number>>();
  @Input() currentYear: number = null;
  currentNum = null;
  currentValue = this.currentNum;
  endValue = this.currentNum + 20;
  currentPageValue = 1;
  mainArray = [];
  ngOnInit() {
    this.initialSetUp();
    for (var i = 1; i < 10000; i++) {
      this.arr.push(i);
    }
    this.currentPageValue =
      Math.floor(
        this.arr.findIndex((item) => item === this.currentNum + 1) / 20
      ) + 1;
    this.currentPage();
  }
  currentPage() {
    this.mainArray = [];
    for (var i = this.currentValue; i < this.endValue; i++) {
      this.mainArray.push(i);
    }
    this.sendCurrentYears.emit(this.mainArray);
  }
  previousPage() {
    this.currentPageValue -= 1;
    this.endValue = this.currentValue;
    this.currentValue =
      this.currentValue - 20 <= this.arr[0]
        ? this.arr[0]
        : this.currentValue - 20;
    this.currentPage();
  }
  nextPage() {
    this.currentPageValue += 1;
    this.currentValue = this.endValue;
    this.endValue =
      this.currentValue + 20 > this.arr[this.arr.length - 1]
        ? this.arr[this.arr.length - 1] + 1
        : this.currentValue + 20;
    this.currentPage();
  }
  calculatePages() {
    return Math.ceil(this.arr.length / 20);
  }

  isPreviousHidden() {
    return this.currentPageValue !== 1;
  }
  isNextHidden() {
    return this.currentPageValue !== this.calculatePages();
  }

  initialSetUp() {
    this.currentNum = this.currentYear;
    this.currentValue = this.currentNum - (this.currentNum % 20);
    this.endValue = this.currentValue + 20;
  }
}
