import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  text = `
  The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
  `
}
