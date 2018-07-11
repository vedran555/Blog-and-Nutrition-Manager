import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionService } from 'src/app/services/nutrition.service';
import { MatSnackBar } from '@angular/material';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {
  date;
  gettingMealsDone = false;
  todaysMealsEmpty;
  todaysMeals; 
  todaysInfos;
  totalInfo;
  mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
  meal = 'breakfast'; // for radio buttons
  lunchQuantityItem = null; lunchErrMsg = ''; matchedLunchs = null; lunchItems = [];
  lunchFoodItem = ''; indLunch = -1; currentLunch = null; lunchQuantErrMsg;
  period;

  constructor(
    private route: ActivatedRoute,
    private nutritionService: NutritionService,
    private router: Router,
    private snackBar: MatSnackBar,
    private screenService: ScreenService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          let date = params.get('date');
          this.getMealsForDate(date);
          this.date = date;
        }
      );
    this.route.queryParamMap
      .subscribe(
        params => {
          this.period = params.get('period');
        }
      );
  }

  // snack bar messages
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2000});
  }

  // get meals for specific date $$$$$ no converting to string, function gets date in string format $$$$$
  getMealsForDate(date) {
    this.nutritionService.getMealsInfo(date)
      .subscribe(
        data => {
          if(!data.success) {
            this.gettingMealsDone = true;
            this.todaysMealsEmpty = true;
            this.totalInfo = data.totalInfo;
          }
          else {
            this.gettingMealsDone = true;
            this.todaysMealsEmpty = false;
            this.todaysMeals = data.mealsInfo; 
            this.todaysInfos = data.sumInfo;
            this.totalInfo = data.totalInfo;
          }
        }
      );
  }

  // delete food for specific meal
  deleteFood(food, quant, ind) {
    this.nutritionService.deleteFood(food, quant, this.mealNames[ind], this.date )
      .subscribe(
        data => {
          if(!data.success) {
            console.log(data.msg);
          }
          else {
            this.deleteMeal(this.date); // run cleaner
            this.getMealsForDate(this.date);
            console.log(data.msg);
          }
        }
      );
  }

  // check is all meals are empty after deleting food from some meal, and if they are empty, delete meal document
  deleteMeal(date) {
    this.nutritionService.deleteMeal(date)
      .subscribe(
        data => {
          if(!data.success) {
            console.log(data.msg);
          }
          else {
            console.log(data.msg);
          }
        }
      );
  }

  /// on back
  goBack() {
    this.router.navigate(['/nutritionmanager']);
  }

    // ########### lunch

  // push lunch food and quantity to the side-list
  addLunchItem() {
    let regexp = /^\s+$/;
    if(this.lunchFoodItem!='' && !regexp.test(this.lunchFoodItem)) {
      this.nutritionService.checkForFood(this.lunchFoodItem)
      .subscribe(
        data => {
          if(!data.success) {
              this.openSnackBar('Please select food from autocomplete options');
              this.lunchErrMsg = '*Select food from autocomplete options';
              console.log('no success, errmsg: ' + this.lunchErrMsg);
              if(!this.isQuantityValid(this.lunchQuantityItem)) {
                this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
              }
          }
          else {
            if(this.isQuantityValid(this.lunchQuantityItem)) {
              this.lunchErrMsg = '';
              let lunchItem = {
                food: this.lunchFoodItem,
                quantity: this.lunchQuantityItem
              }
              this.lunchItems.push(lunchItem);
              let m = this.mealNames.toString();
              let lunch = {
                date: this.date,
                items: this.lunchItems,
                meal: this.meal
              }
              this.nutritionService.pushTodaysMeal(lunch)
                .subscribe(
                  data => {
                    if(!data.success) {
                      this.openSnackBar(data.msg);
                    }
                    else {
                      this.lunchItems = [];
                      this.openSnackBar(data.msg);
                      this.getMealsForDate(this.date);
                    }
                  }
                );
              this.lunchFoodItem = '';
              this.lunchQuantityItem = null;
            }
            else {
              this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
          }
        }
      );
    }
    else {
        this.openSnackBar('Please enter some food first');
        this.lunchErrMsg = '*Food is required';
      if(!this.isQuantityValid(this.lunchQuantityItem)) {
        this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
      }
    }
    if(this.isQuantityValid(this.lunchQuantityItem)) {
      this.lunchQuantErrMsg = '';
    }
  }

  // get all matched groceries
  getmatchedLunchs() {
    this.lunchErrMsg = ''; // to remove error message from DOM
    if(this.lunchFoodItem === '') {
      this.matchedLunchs = null;
    }
    else {
      this.indLunch = -1; ///
      this.currentLunch = null; ///
      this.nutritionService.getMathedGroceries(this.lunchFoodItem)
      .subscribe(
        data => {
          if(!data.success) {
            this.matchedLunchs = null;
          }
          else {
            this.matchedLunchs = data.groceries;
          }
        }
      );
    }
  }

  // on key down in search field
  onKeyDownLunch(event) {
    if(this.matchedLunchs!=null) {
      if(event === 'downArrow') {
        if(this.indLunch == this.matchedLunchs.length-1) {
          this.indLunch = 0;
        }
        else {
          ++this.indLunch;
        }
        if(this.indLunch>-1 && this.indLunch<this.matchedLunchs.length) {
          this.currentLunch = this.matchedLunchs[this.indLunch];  
        }
      }
      if(event === 'upArrow') {
        if(this.indLunch == -1 || this.indLunch == 0) {
          this.indLunch = this.matchedLunchs.length-1;
        }
        else {
          --this.indLunch;
        }
        if(this.indLunch>-1 && this.indLunch<this.matchedLunchs.length) {
          this.currentLunch = this.matchedLunchs[this.indLunch];
        }
      }
    }
  }

  onEnterLunch() {
    if(this.currentLunch != null) {
      this.lunchFoodItem = this.currentLunch.food;
      this.matchedLunchs = null;
      this.indLunch = -1;
      this.currentLunch = null;
    }
  }

  onItemClickLunch(grocerie, indLunchex) {
    this.lunchFoodItem = this.currentLunch.food;
    this.matchedLunchs = null;
    this.indLunch = -1;
  }

  onMouseOverLunch(groc, indLunch) {
    this.currentLunch = groc;
    this.indLunch = indLunch;
  }

  onMouseOutLunch() {
    this.currentLunch = null;
    this.indLunch = -1;
  }

  // quantity check
  isQuantityValid(quantity) {
    let regexp = /^\s+$/;
    let x = Number(quantity);
    if(quantity==='' || regexp.test(quantity) || isNaN(x)) {
      return false;
    }
    else if(x<1 || x>5000) {
      return false;
    }
    else {
      return true;
    }
  }

  // push todays lunch to database
  pushTodaysLunch(todaysLunch) {
    let lunch = {
      date: this.date,
      items: todaysLunch,
      meal: this.meal
    }
    this.nutritionService.pushTodaysMeal(lunch)
      .subscribe(
        data => {
          if(!data.success) {
            this.openSnackBar(data.msg);
          }
          else {
            todaysLunch = null;
            this.openSnackBar(data.msg);
            this.getMealsForDate(this.date);
          }
        }
      );
  }

  // delete meal document from database
  removeMeal() {
    this.nutritionService.removeMeal(this.date)
      .subscribe(
          data => {
            if(!data.success) {
              this.openSnackBar(data.msg);
            }
            else {
              this.openSnackBar(data.msg);
              setTimeout(() => {
                this.router.navigate(['/nutritionmanager'], { queryParams: {period: this.period}});
              }, 1500);
            }
          }
      );
  }

}
