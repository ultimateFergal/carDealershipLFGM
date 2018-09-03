import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-comparison',
  templateUrl: './cars-comparison.component.html',
  styleUrls: ['./cars-comparison.component.css']
})
export class CarsComparisonComponent implements OnInit {

  errorMessage: string;
  paramId1: number;
  paramId2: number;
  paramId3: number;
  classCompare: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paramId1 = +params.get('id1');
      this.paramId2 = +params.get('id2');
      this.paramId3 = +params.get('id3');
      if (this.paramId3) {
        this.classCompare = 'col-md-4 compare3';
      } else {
        this.classCompare = 'col-md-6 compare2';
      }
    });
  }
}
