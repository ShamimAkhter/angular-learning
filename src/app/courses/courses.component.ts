import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    {{ course.title }} <br>
    {{ course.title | uppercase }} <br>
    {{ course.title | uppercase | lowercase }} <br>
    <hr>
    {{ course.students }} <br>
    {{ course.students | number }} <br>
    <hr>
    {{ course.rating | number }} <br>
    {{ course.rating | number:'1.2-2' }} <br>
    {{ course.rating | number:'1.2-2' }} <br>
    {{ course.rating | number:'2.1-1' }} <br>
    <hr>
    {{ course.price }} <br>
    {{ course.price | currency }} <br>
    {{ course.price | currency:'INR' }} <br>
    {{ course.price | currency:'INR':false }} <br>
    {{ course.price | currency:'INR':false:'3.2-2' }} <br>
    <hr>
    {{ course.releaseDate }} <br>
    {{ course.releaseDate | date }} <br>
    {{ course.releaseDate | date:'shortDate' }} <br>
  `
})
export class CoursesComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2022, 7, 11)
  }
}
