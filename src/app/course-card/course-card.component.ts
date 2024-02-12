import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../services/interfaces';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course!: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {
  }

  onCourseViewed() {    
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }
}