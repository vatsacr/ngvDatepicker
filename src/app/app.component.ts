import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  date = new Date("11/08/2015");
  selectedDate(date: Date) {
    this.date = date;
  }
}
