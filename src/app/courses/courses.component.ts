import { Component } from "@angular/core";

@Component({
  selector: 'courses', 
  // template: '<h2>{{ "Title: " + title }}</h2>' // string interpolation
  template: '<h2>{{ "Title: " + getTitle() }}</h2>'
})
export class CoursesComponent {
  title = "List of courses";
  
  getTitle() {
    return this.title;
  }
}
