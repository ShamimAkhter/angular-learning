import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <!-- <button (click)="onSave()">Save</button> -->
    
    <!-- <button (click)="onSave($event)">Save</button> -->
    
    <!-- <div (click)="onDiv1Clicked()">
      <div (click)="onDiv2Clicked()">
        <button (click)="onSave($event)">Save</button>
      </div>
    </div> -->
    
    <!-- <input (keyup)="onKeyUp($event)"> better way: applying a filter -->
    <input (keyup.enter)="onKeyUp()"> 
  `
})
export class CoursesComponent {
  // onKeyUp(e:KeyboardEvent) {
  //   if(e.keyCode === 13) console.log('ENTER was pressed!');
  // }

  onKeyUp() { // better way: applying a filter
    console.log('ENTER was pressed!');
  }

  onDiv1Clicked() {
    console.log('Div 1 was clicked');
  }

  onDiv2Clicked() {
    console.log('Div 2 was clicked');
  }

  onSave($event: Event) {
    // to prevent event bubbling
    $event.stopPropagation();

    console.log('Button was clicked!', $event);
  }
}
