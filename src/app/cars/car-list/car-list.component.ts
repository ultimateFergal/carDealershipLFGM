import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from 'src/app/cars/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  imgWidth = '150';
  imgMargin = '2';
  boxHeight = '80';
  listOrLarge = 'large';
  largeBG = '#2fdab8';
  listBG = '#000';
  redirectString = '/carsComparison/';

  // listFilter: string = 'all';

  filteredCars: ICar[];
  cars: ICar[] = [];
  carsToCompare: any[] = [];
  errorMessage: string;
  _listFilter: string;



  constructor(private carService: CarService, private _router: Router) {
    this.listFilter = '';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCars = this.listFilter ? this.performFilter(this.listFilter) : this.cars;
  }

  performFilter(filterBy: string): ICar[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cars.filter((car: ICar) => car.model.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleListLarge(choice: string): void {
    this.listOrLarge = choice;
    if (choice === 'large') {
      this.largeBG = '#2fdab8';
      this.listBG = '#000';
    } else {
      this.largeBG = '#000';
      this.listBG = '#2fdab8';
    }
  }

  changeChb(e, id) {
    if (e.target.checked) {
      this.carsToCompare.push(id);
    } else {
      this.carsToCompare.splice(this.carsToCompare.indexOf(id), 1);
    }
  }

  compareCars(): void {

    if (this.carsToCompare.length > 1 && this.carsToCompare.length < 4) {
      this.carsToCompare.forEach(element => {
        this.redirectString += element + '/';
      });

      this._router.navigate([ this.redirectString]);
    } else {
      alert ('You can only compare 2 or 3 cars');
    }
  }

  ngOnInit() {
    this.carService.getCars().subscribe(
      cars => {
        this.cars = cars;
        this.filteredCars = this.cars.sort(function (a, b) {
          if (a.model > b.model) {
            return 1;
          } else {
            return -1;
          }
        });
      },
      error => this.errorMessage = <any>error
    );
  }

}
