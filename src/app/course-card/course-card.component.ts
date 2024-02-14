import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Course } from '../services/interfaces';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course!: Course;

  @Input({ required: true })
  index!: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {
  }

  onCourseViewed() {    
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }

//  isImageVisible() {
//    return this.course && this.course.iconUrl
//  }

  cardClasses() {
    return {'beginner': this.course.category == 'BEGINNER'};
    //if (this.course.category == 'BEGINNER') {
    //  return 'beginner';
    //}
    //return '';    
  }

  cardStyle() {
    return {'background-image': 'url(' + this.course.iconUrl + ')'
  };
  }

  //cardImage() {
  //  return  this.course.iconUrl ? this.course.iconUrl : '../assets/empty-image.png';
  //}
}