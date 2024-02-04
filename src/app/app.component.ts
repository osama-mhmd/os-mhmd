import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  slide = 1;
  maxSlides = 8;

  public ngOnInit(): void {
    this.keyboardSwitcher();
  }
  nextSlide() {
    this.slide++;
  }
  previousSlide() {
    this.slide--;
  }
  switchSlide(slideNum: number) {
    this.slide = slideNum;
  }
  active(slideNum: number) {
    return slideNum == this.slide ? "active" : "";
  }
  slider(slideNum: number) {
    return this.slide > slideNum
      ? "previous"
      : this.slide < slideNum
      ? "next"
      : "";
  }
  keyboardSwitcher() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        if (this.slide != this.maxSlides) this.slide++;
      } else if (e.key == "ArrowLeft") {
        if (this.slide != 1) this.slide--;
      }
    });
  }
}
