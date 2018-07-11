import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NutritionService } from 'src/app/services/nutrition.service';
import { MatSnackBar } from '@angular/material';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  breakfastQuantityItem = null; breakfastItems = []; breakfErrMsg = ''; matchedBreakfasts = null;
  breakfastFoodItem = ''; indBreakfast = -1; currentBreakfast = null; breakfQuantErrMsg;
  lunchQuantityItem = null; lunchItems = []; lunchErrMsg = ''; matchedLunchs = null;
  lunchFoodItem = ''; indLunch = -1; currentLunch = null; lunchQuantErrMsg;
  dinnerQuantityItem = null; dinnerItems = []; dinnerErrMsg = ''; matchedDinners = null;
  dinnerFoodItem = ''; indDinner = -1; currentDinner = null; dinnerQuantErrMsg;
  additionallyQuantityItem = null; additionallyItems = []; additionallyErrMsg = ''; matchedAdditionallys = null;
  additionallyFoodItem = ''; indAdditionally = -1; currentAdditionally = null; additionallyQuantErrMsg;

  constructor(
    private nutritionService: NutritionService,
    private snackBar: MatSnackBar,
    private screenService: ScreenService
  ) { }

  ngOnInit() {}

  // snack bar messages
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2000});
  }

  // push breakfast food and quantity to the side-list
  addBreakfastItem() {
    let regexp = /^\s+$/;
    if(this.breakfastFoodItem!='' && !regexp.test(this.breakfastFoodItem)) {
      this.nutritionService.checkForFood(this.breakfastFoodItem)
      .subscribe(
        data => {
          if(!data.success) {
              this.openSnackBar('Please select food from autocomplete options');
              this.breakfErrMsg = '*Select food from autocomplete options';
              console.log('no success, errmsg: ' + this.breakfErrMsg);
              if(!this.isQuantityValid(this.breakfastQuantityItem)) {
                this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
              }
          }
          else {
            if(this.isQuantityValid(this.breakfastQuantityItem)) {
              this.breakfErrMsg = '';
              let breakfastItem = {
                food: this.breakfastFoodItem,
                quantity: this.breakfastQuantityItem
              }
              this.breakfastItems.push(breakfastItem);
              this.breakfastFoodItem = '';
              this.breakfastQuantityItem = null;
            }
            else {
              this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
          }
        }
      );
    }
    else {
        this.openSnackBar('Please enter some food first');
        this.breakfErrMsg = '*Food is required';
      if(!this.isQuantityValid(this.breakfastQuantityItem)) {
        this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
      }
    }
    if(this.isQuantityValid(this.breakfastQuantityItem)) {
      this.breakfQuantErrMsg = '';
    }
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

  // ########### breakfast
    // get all matched groceries
    getmatchedBreakfasts() {
      this.breakfErrMsg = ''; // to remove error message from dom
      if(this.breakfastFoodItem === '') {
        this.matchedBreakfasts = null;
      }
      else {
        this.indBreakfast = -1; ///
        this.currentBreakfast = null; ///
        this.nutritionService.getMathedGroceries(this.breakfastFoodItem)
        .subscribe(
          data => {
            if(!data.success) {
              this.matchedBreakfasts = null;
            }
            else {
              this.matchedBreakfasts = data.groceries;
            }
          }
        );
      }
    }
  
    // on key down in search field
    onKeyDown(event) {
      if(this.matchedBreakfasts!=null) {
        if(event === 'downArrow') {
          if(this.indBreakfast == this.matchedBreakfasts.length-1) {
            this.indBreakfast = 0;
          }
          else {
            ++this.indBreakfast;
          }
          if(this.indBreakfast>-1 && this.indBreakfast<this.matchedBreakfasts.length) {
            this.currentBreakfast = this.matchedBreakfasts[this.indBreakfast];  
          }
        }
        if(event === 'upArrow') {
          if(this.indBreakfast == -1 || this.indBreakfast == 0) {
            this.indBreakfast = this.matchedBreakfasts.length-1;
          }
          else {
            --this.indBreakfast;
          }
          if(this.indBreakfast>-1 && this.indBreakfast<this.matchedBreakfasts.length) {
            this.currentBreakfast = this.matchedBreakfasts[this.indBreakfast];
          }
        }
      }
    }
  
    onEnter() {
      if(this.currentBreakfast != null) {
        this.breakfastFoodItem = this.currentBreakfast.food;
        this.matchedBreakfasts = null;
        this.indBreakfast = -1;
        this.currentBreakfast = null;
      }
    }
  
    onItemClick(grocerie, indBreakfastex) {
      this.breakfastFoodItem = this.currentBreakfast.food;
      this.matchedBreakfasts = null;
      this.indBreakfast = -1;
    }
  
    onMouseOver(groc, indBreakfast) {
      this.currentBreakfast = groc;
      this.indBreakfast = indBreakfast;
    }
  
    onMouseOut() {
      this.currentBreakfast = null;
      this.indBreakfast = -1;
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
      this.lunchErrMsg = ''; // to remove error message from dom
      if(this.lunchFoodItem === '') {
        this.matchedLunchs = null;
      }
      else {
        this.indLunch = -1;
        this.currentLunch = null;
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

// ########### dinner

// push dinner food and quantity to the side-list
addDinnerItem() {
  let regexp = /^\s+$/;
  if(this.dinnerFoodItem!='' && !regexp.test(this.dinnerFoodItem)) {
    this.nutritionService.checkForFood(this.dinnerFoodItem)
    .subscribe(
      data => {
        if(!data.success) {
            this.openSnackBar('Please select food from autocomplete options');
            this.dinnerErrMsg = '*Select food from autocomplete options';
            console.log('no success, errmsg: ' + this.dinnerErrMsg);
            if(!this.isQuantityValid(this.dinnerQuantityItem)) {
              this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        else {
          if(this.isQuantityValid(this.dinnerQuantityItem)) {
            this.dinnerErrMsg = '';
            let dinnerItem = {
              food: this.dinnerFoodItem,
              quantity: this.dinnerQuantityItem
            }
            this.dinnerItems.push(dinnerItem);
            this.dinnerFoodItem = '';
            this.dinnerQuantityItem = null;
          }
          else {
            this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
          }
        }
      }
    );
  }
  else {
      this.openSnackBar('Please enter some food first');
      this.dinnerErrMsg = '*Food is required';
    if(!this.isQuantityValid(this.dinnerQuantityItem)) {
      this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
    }
  }
  if(this.isQuantityValid(this.dinnerQuantityItem)) {
    this.dinnerQuantErrMsg = '';
  }
}

// get all matched groceries
getmatchedDinners() {
  this.dinnerErrMsg = ''; // to remove error message from dom
  if(this.dinnerFoodItem === '') {
    this.matchedDinners = null;
  }
  else {
    this.indDinner = -1;
    this.currentDinner = null;
    this.nutritionService.getMathedGroceries(this.dinnerFoodItem)
    .subscribe(
      data => {
        if(!data.success) {
          this.matchedDinners = null;
        }
        else {
          this.matchedDinners = data.groceries;
        }
      }
    );
  }
}

// on key down in search field
onKeyDownDinner(event) {
  if(this.matchedDinners!=null) {
    if(event === 'downArrow') {
      if(this.indDinner == this.matchedDinners.length-1) {
        this.indDinner = 0;
      }
      else {
        ++this.indDinner;
      }
      if(this.indDinner>-1 && this.indDinner<this.matchedDinners.length) {
        this.currentDinner = this.matchedDinners[this.indDinner];  
      }
    }
    if(event === 'upArrow') {
      if(this.indDinner == -1 || this.indDinner == 0) {
        this.indDinner = this.matchedDinners.length-1;
      }
      else {
        --this.indDinner;
      }
      if(this.indDinner>-1 && this.indDinner<this.matchedDinners.length) {
        this.currentDinner = this.matchedDinners[this.indDinner];
      }
    }
  }
}

onEnterDinner() {
  if(this.currentDinner != null) {
    this.dinnerFoodItem = this.currentDinner.food;
    this.matchedDinners = null;
    this.indDinner = -1;
    this.currentDinner = null;
  }
}

onItemClickDinner(grocerie, indDinnerex) {
  this.dinnerFoodItem = this.currentDinner.food;
  this.matchedDinners = null;
  this.indDinner = -1;
}

onMouseOverDinner(groc, indDinner) {
  this.currentDinner = groc;
  this.indDinner = indDinner;
}

onMouseOutDinner() {
  this.currentDinner = null;
  this.indDinner = -1;
}


// ########### additionally

// push additionally food and quantity to the side-list
addAdditionallyItem() {
  let regexp = /^\s+$/;
  if(this.additionallyFoodItem!='' && !regexp.test(this.additionallyFoodItem)) {
    this.nutritionService.checkForFood(this.additionallyFoodItem)
    .subscribe(
      data => {
        if(!data.success) {
            this.openSnackBar('Please select food from autocomplete options');
            this.additionallyErrMsg = '*Select food from autocomplete options';
            console.log('no success, errmsg: ' + this.additionallyErrMsg);
            if(!this.isQuantityValid(this.additionallyQuantityItem)) {
              this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        else {
          if(this.isQuantityValid(this.additionallyQuantityItem)) {
            this.additionallyErrMsg = '';
            let additionallyItem = {
              food: this.additionallyFoodItem,
              quantity: this.additionallyQuantityItem
            }
            this.additionallyItems.push(additionallyItem);
            this.additionallyFoodItem = '';
            this.additionallyQuantityItem = null;
          }
          else {
            this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
          }
        }
      }
    );
  }
  else {
      this.openSnackBar('Please enter some food first');
      this.additionallyErrMsg = '*Food is required';
    if(!this.isQuantityValid(this.additionallyQuantityItem)) {
      this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
    }
  }
  if(this.isQuantityValid(this.additionallyQuantityItem)) {
    this.additionallyQuantErrMsg = '';
  }
}

// get all matched groceries
getmatchedAdditionallys() {
  this.additionallyErrMsg = ''; // to remove error message from dom
  if(this.additionallyFoodItem === '') {
    this.matchedAdditionallys = null;
  }
  else {
    this.indAdditionally = -1;
    this.currentAdditionally = null;
    this.nutritionService.getMathedGroceries(this.additionallyFoodItem)
    .subscribe(
      data => {
        if(!data.success) {
          this.matchedAdditionallys = null;
        }
        else {
          this.matchedAdditionallys = data.groceries;
        }
      }
    );
  }
}

// on key down in search field
onKeyDownAdditionally(event) {
  if(this.matchedAdditionallys!=null) {
    if(event === 'downArrow') {
      if(this.indAdditionally == this.matchedAdditionallys.length-1) {
        this.indAdditionally = 0;
      }
      else {
        ++this.indAdditionally;
      }
      if(this.indAdditionally>-1 && this.indAdditionally<this.matchedAdditionallys.length) {
        this.currentAdditionally = this.matchedAdditionallys[this.indAdditionally];  
      }
    }
    if(event === 'upArrow') {
      if(this.indAdditionally == -1 || this.indAdditionally == 0) {
        this.indAdditionally = this.matchedAdditionallys.length-1;
      }
      else {
        --this.indAdditionally;
      }
      if(this.indAdditionally>-1 && this.indAdditionally<this.matchedAdditionallys.length) {
        this.currentAdditionally = this.matchedAdditionallys[this.indAdditionally];
      }
    }
  }
}

onEnterAdditionally() {
  if(this.currentAdditionally != null) {
    this.additionallyFoodItem = this.currentAdditionally.food;
    this.matchedAdditionallys = null;
    this.indAdditionally = -1;
    this.currentAdditionally = null;
  }
}

onItemClickAdditionally(grocerie, indAdditionallyex) {
  this.additionallyFoodItem = this.currentAdditionally.food;
  this.matchedAdditionallys = null;
  this.indAdditionally = -1;
}

onMouseOverAdditionally(groc, indAdditionally) {
  this.currentAdditionally = groc;
  this.indAdditionally = indAdditionally;
}

onMouseOutAdditionally() {
  this.currentAdditionally = null;
  this.indAdditionally = -1;
}

}