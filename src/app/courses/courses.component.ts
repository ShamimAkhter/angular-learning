import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <img [src]="imageUrl">
    <table>
      <tr>
        <!-- <td [colspan]="colSpan"></td> Error -->
        <td [attr.colspan]="colSpan"></td> 
      </tr>
    </table>
  `
})
export class CoursesComponent {
  imageUrl = "https://placekitten.com/640/360";
  colSpan = 2;
}
