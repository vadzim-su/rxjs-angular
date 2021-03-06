import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class CoursesService{

  constructor(private http: HttpClient) {

  }

public loadAllCourses():Observable<Course[]> {
  return this.http.get<Course[]>('/api/courses')
    .pipe(
      map(res => res['payload'])
    )
}

}
