import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

import { ICar } from '../car';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: ICar;
  cars: ICar[] = [];
  classComparison: string;

  errorMessage: string;
  @Input() paramId: number;

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.classComparison = 'banner-bootom-w3-agileits';
    this.route.paramMap.subscribe(params => {

      if (!this.paramId) {
        this.classComparison = 'banner-bootom-w3-agileits';
        this.paramId = +params.get('id');
        const id = this.paramId;
        this.getCar(id);
      } else {
        this.classComparison = 'banner-bootom-w3-agileitsComparison';
        this.getCar(this.paramId);
      }

    });
  }


  getCar(id: number) {
    this.carService.getCar(id).subscribe(
      car => this.car = car,
      error => this.errorMessage = <any>error);
  }
}
