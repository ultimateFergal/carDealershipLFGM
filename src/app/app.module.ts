import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarsComparisonComponent } from './cars/cars-comparison/cars-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    CarsComparisonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cars', component: CarListComponent },
      { path: 'car/:id', component: CarDetailComponent},
      { path: 'carsComparison/:id1/:id2', component: CarsComparisonComponent },
      { path: 'carsComparison/:id1/:id2/:id3', component: CarsComparisonComponent },
      { path: '', redirectTo: 'cars', pathMatch: 'full'},
      { path: '**', redirectTo: 'cars', pathMatch: 'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
