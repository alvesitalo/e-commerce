import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Banner } from 'src/models/banner';
import { Category } from 'src/models/category';
import { Course } from 'src/models/course';

const apiUrl = 'https://api.decroly.com.br';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    console.error(
      `Back-end returned code ${error.status}, ` +
      `body was: ${error.message}`
    );
    return throwError(
      'Something bad happened. Please try again later.'
    );
  }

  getBanner(id: string): Observable<any> {
    const url = `${apiUrl}/ecommerce/banner/${id}`;
    return this.http.get<Banner>(url).pipe(
      catchError(this.handleError)
    );
  }

  getCategories(id: string): Observable<any> {
    const url = `${apiUrl}/categories/${id}`;
    return this.http.get<Category[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getCourses(id: string): Observable<any> {
    const url = `${apiUrl}/ecommerce/courses/all?id=${id}`;
    return this.http.get<Course[]>(url).pipe(
      catchError(this.handleError)
    );
  }
}
