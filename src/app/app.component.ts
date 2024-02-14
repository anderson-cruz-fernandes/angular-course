import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe, CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './services/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, DatePipe,TitleCasePipe,
            CurrencyPipe, PercentPipe, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  courses = [...COURSES];

  title = COURSES[0].description;

  price = 9.99;

  rate = 0.67;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);
  
  onCourseSelected(course:Course) {
    console.log('CARD COMPONENT - BUTTON CLICKED ...', course);    
  }
}
