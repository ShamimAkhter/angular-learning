import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <!-- <input [value]="email" (keyup.enter)="assign($event); onKeyUp()"> Approach 1 -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
  `
})
export class CoursesComponent {
  email = 'me@example.com';

  assign(e: Event) {
    this.email = (e.target as HTMLInputElement).value;
  }

  onKeyUp() {
    console.log(this.email);
  }
}
