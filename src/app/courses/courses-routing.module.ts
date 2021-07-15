import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from '../courses/courses.component';
import { CourseItemComponent } from '../courses/course-item/course-item.component';

const routes: Routes = [
  { 
    path: '',
    component: CoursesComponent,
  },
  {
    path: ':id',
    component: CourseItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
