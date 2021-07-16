import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

import { Banner } from 'src/models/banner';
import { Category } from 'src/models/category';
import { Course } from 'src/models/course';
import { CoursesObj } from 'src/models/coursesObj';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public school: string = "2"
  public coursesID: string = "Mf6xsQw7XzbvpFGwx4Bl"
  public banner: Banner = new Banner()
  public categories: Category[] = []
  public courses: Course[] = []
  public coursesObj: CoursesObj = {}

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.queryParams.subscribe(params => {
      let school = params['school'];
      if (params['school']) {
        this.school = school;

        if (school === "2") {
          this.coursesID = "Mf6xsQw7XzbvpFGwx4Bl"
        } else if (school === "3") {
          this.coursesID = "ZvX9j4Ff14EThylpWUhc"
        }
      }
    });
  }

  ngOnInit(): void {
    this.getBannerAPI(this.school);
    this.getCategoriesAPI(this.school);
    this.getCoursesAPI(this.coursesID);
  }

  getBannerAPI(id: any): void {
    this.api.getBanner(id)
      .subscribe((data: any) => {
        this.banner = data;
      });
  }

  getBannerStyle(): object {
    return {
      'background-image': `url(${this.banner.backgroundUrl})`,
      'background-size': 'cover'
    }
  }

  getCategoriesAPI(id: any): void {
    this.api.getCategories(id)
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  getCoursesAPI(id: any): void {
    this.api.getCourses(id)
      .subscribe((data: any) => {
        this.courses = data;
        this.getCoursesObj();
      });
  }

  getCoursesObj(): void {
    let coursesObj: CoursesObj = {}

    this.courses.forEach(course => {
      let courseId = course.edools?.course
      coursesObj[courseId] = course
    });
    this.coursesObj = coursesObj;
  }

  hasCoursesObj(): boolean {
    let objectKeys = Object.keys(this.coursesObj)
    if (objectKeys.length > 0) {
      return true
    }
    return false
  }

  getCourse(key: number): Course {
    if (this.coursesObj[key]) {
      return this.coursesObj[key]
    }
    return new Course()
  }
}
