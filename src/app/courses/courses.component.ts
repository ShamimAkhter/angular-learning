import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <!-- <input (keyup.enter)="onKeyUp($event)"> Approach 1 -->
    
    <input #email (keyup.enter)="onKeyUp(email.value)"> <!-- Approach 2 -->
  `
})
export class CoursesComponent {
  // Approach 1:
  // onKeyUp(e:Event) {
  //   console.log((e.target as HTMLInputElement).value);
  // }

  // Approach 2:
  onKeyUp(email: string) { // better way: applying a filter
    console.log(email);
  }
}
