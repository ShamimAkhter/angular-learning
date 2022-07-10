import { Component } from "@angular/core";

@Component({
  selector: 'courses', // with components we can extend HTML vocabulary
  template: '<h2>Courses</h2>'
})
export class CoursesComponent {
  
}
/*
In CSS if we want to reference a selector, like
element like             <courses>            : 'courses',
element that has a class <div class="courses">: '.courses'
element that has an id   <div id="courses">   : '#courses'
*/