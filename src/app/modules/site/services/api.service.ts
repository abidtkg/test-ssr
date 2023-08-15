import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  platfromId: object
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platfromId: Object 
  ) {
    this.platfromId = platfromId;
  }

  getPost(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts`)
    .pipe(
      catchError(this.errorHandeller)
    );
  }

  getToken(){
    if(isPlatformBrowser(this.platfromId)){
      return localStorage.getItem('token') || '';
    }else{
      return '';
    }
    
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
