import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ICar } from 'src/app/cars/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl = 'src/api/cars/cars.json';

  constructor(private http: HttpClient) { }

  cars: ICar[] = [];
  car: ICar[] = [];

  getCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.carUrl).pipe(
      tap(data => this.cars = data),
      catchError(this.handleError)
    );
  }

  getCar(id: number): Observable<ICar | undefined> {
    return this.getCars().pipe(
      map((cars: ICar[]) => cars.find(c => c.carId === id))
    );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Ha ocurrido un error: ${err.status}, mensaje de error: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
