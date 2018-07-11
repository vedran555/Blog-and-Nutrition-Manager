import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NutritionService } from 'src/app/services/nutrition.service';
import { ScreenService } from 'src/app/services/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earlier-days',
  templateUrl: './earlier-days.component.html',
  styleUrls: ['./earlier-days.component.css']
})
export class EarlierDaysComponent implements OnInit, OnChanges {
  @Input() period;
  @Input() caloryLimit;
  periodMeals;
  mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
  loadingMeals = true;
  missing;
  isMissing = false;
  thereAreMeals = false;

  constructor(
    private nutritionService: NutritionService,
    private screenService: ScreenService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.loadingMeals = true;
    this.getSomeMeals();
  }

  // get meals info for period
  getSomeMeals() {
    this.nutritionService.getSomeMeals(this.period)
      .subscribe(
        data => {
          if(!data.success) {
            this.loadingMeals = false;
          }
          else {
            this.loadingMeals = false;
            this.periodMeals = data.periodmeals;
            if(this.periodMeals == '') {
              this.thereAreMeals = false;
              this.isMissing = true;
              this.missing = data.missing;
            }
            else {
              this.thereAreMeals = true;
              this.periodMeals = data.periodmeals;
              this.missing = data.missing;
              if(this.missing == '') {
                this.isMissing = false;
              }
              else {
                this.isMissing = true;
              }
            }
          }
        }
      );
  }

  // on edit meal
  onEditMeal(date) {
    this.router.navigate(['edit-meal/' + date]);
  }

  // period name just for the template
  periodName() {
    switch(this.period) {
      case '3days':
        return 'Want to add meals for some date that is missing in last 3 days?';
      case 'week':
        return 'Want to add meals for some date that is missing in this week?';
      case 'month':
        return 'Want to add meals for some date that is missing in this month?';
      default: return '(error)'
    }
  }

  // period name just for the template
  periodName2() {
    switch(this.period) {
      case '3days':
        return 'No meals for last 3 days';
      case 'week':
        return 'No meals for this week';
      case 'month':
        return 'No meals for this month';
      default: return '(error)'
    }
  }

}
