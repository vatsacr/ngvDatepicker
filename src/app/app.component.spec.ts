import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DatepickerComponent } from "./datepicker.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DatepickerComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calendar'`, () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("calendar");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain(
      "calendar app is running!"
    );
  });
});
