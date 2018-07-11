import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NutritionService } from 'src/app/services/nutrition.service';
import { ScreenService } from 'src/app/services/screen.service';
import { MatSnackBar } from '@angular/material';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { MealsComponent } from '../meals/meals.component';

@Component({
  selector: 'app-nutrition-manager',
  templateUrl: './nutrition-manager.component.html',
  styleUrls: ['./nutrition-manager.component.css']
})
export class NutritionManagerComponent implements OnInit {
  @ViewChild('quantEditing') quantEditing: ElementRef;
  @ViewChild('foodSearch') foodSearch: ElementRef;
  showInfoSection = false;
  form: FormGroup;
  editForm: FormGroup;
  providedInfo; // determines whether to show to enter user's info or to edit user's info
  checkedIfprovidedInfo = false; // false while checking to database if user provided info
  showEditSection = false;
  calculating = false;
  caloryLimit = null;
  matchedGroceries = null;
  searchText = ''; ind = -1; currentGrocerie = null;
  todaysMealsEmpty = true;
  todaysBreakfast = null; todaysLunch = null; todaysDinner = null; todaysAdditionally = null;
  todaysMeals = []; todaysInfos = []; mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
  totalInfo;
  gettingMealsDone = false; // false while getting information about meals from database(no matter meals exist or not)
  editingQuantity; quantityToEdit; itemForEdit = { food: '', quantity: '', id: '' }; quantErrMsg = '';
  period;
  showSearchInput = false;
  foodFound = false;
  searchPerformed = false;
  searchedFood = null;
  lastChoice = '3days';
  date;
  checkboxDate = false;
  checkboxPeriod = true;

  constructor(
    private fb: FormBuilder,
    private nutritionService: NutritionService,
    private screenService: ScreenService,
    private snackBar: MatSnackBar,
    private http: Http,
    private route: ActivatedRoute
  ) { 
    this.createForm(); 
    this.createEditForm();
  }

  ngOnInit() {
    this.route.queryParamMap // to remember which period filter was chosen
      .subscribe(
        params => {
          this.period = params.get('period') || '3days';
        }
      );
    this.setValues();
    this.getMealsForDate(new Date());
  }

  // snack bar messages
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2000});
  }

  // validate height
  validateHeight(control) {
    let regexp = /^1\d{2}$|^20\d$|^21\d$|^22\d$|^23\d$|^24\d$/;
    if(regexp.test(control.value)) { return null }
    else { return { 'validateHeight': true } }
  }

  // vaidate weight
  validateWeight(control) {
    let regexp = /^3\d{1}$|^4\d{1}$|^5\d{1}$|^6\d{1}$|^7\d{1}$|^8\d{1}$|^9\d{1}$|^1\d{2}$|^2\d{2}$/;
    if(regexp.test(control.value)) { return null }
    else { return { 'validateWeight': true } }
  }

  // validate age
  validateAge(control) {
    let regexp = /^\d{1,2}$|^10\d{1}$|^11\d{1}$/;
    if(regexp.test(control.value)) { return null }
    else { return { 'validateAge': true } }
  }

  // create reactive form
  createForm() {
    this.form = this.fb.group({
      age: new FormControl('', [ Validators.required, this.validateAge ]),
      height: new FormControl('', [ Validators.required, this.validateHeight ]),
      weight: new FormControl('', [ Validators.required, this.validateWeight ]),
      gender: new FormControl('', [ Validators.required ]), 
      activity: new FormControl('', [ Validators.required ]), 
    });
  }

  // create reactive edit form
  createEditForm() {
    this.editForm = this.fb.group({
      age: new FormControl('', [ Validators.required, this.validateAge ]),
      height: new FormControl('', [ Validators.required, this.validateHeight ]),
      weight: new FormControl('', [ Validators.required, this.validateWeight ]),
      gender: new FormControl('', [ Validators.required ]), 
      activity: new FormControl('', [ Validators.required ]), 
    });
  }

  // submit user's physical info (POST)
  onSubmit() {
    const info = {
      age: this.form.get('age').value,
      height: this.form.get('height').value,
      weight: this.form.get('weight').value,
      gender: this.form.get('gender').value,
      activity: this.form.get('activity').value
    }
    this.nutritionService.addPhysicalInfo(info)
      .subscribe(
        data => {
          if(!data.success) {
            this.openSnackBar('Something went wrong..');
          }
          else {
            this.calculating = true;
            setTimeout(() => {
              this.setValues();
              this.calculating = false;
              this.openSnackBar('Successfully added physical info!');
            }, 2000);
          }
        }
      );
  }

  // submit EDIT user's physical info (PUT)
  onSubmitEdit() {
    const editedInfo = {
      age: this.editForm.get('age').value,
      height: this.editForm.get('height').value,
      weight: this.editForm.get('weight').value,
      gender: this.editForm.get('gender').value,
      activity: this.editForm.get('activity').value
    }
    this.nutritionService.editInfo(editedInfo)
      .subscribe(
        data => {
          if(!data.success) {
            this.openSnackBar(data.msg);
          }
          else {
            this.openSnackBar(data.msg);
            this.showEditSection = false;
            this.setValues();
          }
        }
      );    
  }

  // set values from database to edit section
  setValues() {
    this.nutritionService.checkForInfo()
    .subscribe(
      data => {
        if(!data.success) {
          this.checkedIfprovidedInfo = true;
          this.providedInfo = false;
        }
        else {
          this.checkedIfprovidedInfo = true;
          this.providedInfo = true;
          this.caloryLimit = Math.round(Number(data.info.calories));
          this.editForm.setValue({
            age: data.info.age,
            height: data.info.height,
            weight: data.info.weight,
            gender: data.info.gender,
            activity: data.info.activity
          });
        }
      }
    );
  }

  // convert date to string in form of dd-mm-yyyy (adding one to
  // month to get real month, because of zero-based months in JS)
  dateToString(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    if(d<=9) {
      d = "0"+d;
    }
    if(m<=9) {
      m = "0"+m; 
    }
    let dateString = d+"-"+m+"-"+y;
    return dateString; 
  }

  // remove item from array of meals (universal)
  removeFromArray(array, arrayItem) {
    let ind = array.findIndex(item => (item.food == arrayItem.food && item.quantity == arrayItem.quantity));
    array.splice(ind, 1);
  }

  // get all matched groceries
  getMatchedGroceries() {
    let regexp = /^\s+$/;
    if(this.searchText === '' || regexp.test(this.searchText)) {
      this.matchedGroceries = null;
    }
    else {
      this.ind = -1;
      this.currentGrocerie = null;
      this.nutritionService.getMathedGroceries(this.searchText)
      .subscribe(
        data => {
          if(!data.success) {
            this.matchedGroceries = null;
          }
          else {
            this.matchedGroceries = data.groceries;
          }
        }
      );
    }
  }

  // on key down in search field
  onKeyDown(event) {
    if(this.matchedGroceries != null) { 
      if(event === 'downArrow') {
        if(this.ind == this.matchedGroceries.length-1) {
          this.ind = 0;
        }
        else {
          ++this.ind;
        }
        if(this.ind>-1 && this.ind<this.matchedGroceries.length) {
          this.currentGrocerie = this.matchedGroceries[this.ind];  
        }
      }
      if(event === 'upArrow') {
        if(this.ind == -1 || this.ind == 0) {
          this.ind = this.matchedGroceries.length-1;
        }
        else {
          --this.ind;
        }
        if(this.ind>-1 && this.ind<this.matchedGroceries.length) {
          this.currentGrocerie = this.matchedGroceries[this.ind];
        }
      }
    }
  }

  onEnter() {
    if(this.currentGrocerie != null) {
      this.searchText = this.currentGrocerie.food;
    }
    this.matchedGroceries = null;
    this.ind = -1;
    this.currentGrocerie = null;
    let regexp = /^\s+$/;
    if(this.searchText != '' && !regexp.test(this.searchText)) {
      this.nutritionService.searchGroceries(this.searchText)
      .subscribe(
        data => {
          if(!data.success) {
            this.searchPerformed = true;
            this.foodFound = false;
          }
          else {
            this.searchPerformed = true;
            this.foodFound = true;
            this.searchedFood = data.grocerie;

          }
        }
      );
    }
  }

  onItemClick(grocerie, index) {
    this.searchText = this.currentGrocerie.food;
    this.matchedGroceries = null;
    this.ind = -1;
  }

  onMouseOver(groc, ind) {
    this.currentGrocerie = groc;
    this.ind = ind;
  }

  onMouseOut() {
    this.currentGrocerie = null;
    this.ind = -1;
  }

  // push todays breakfast to database
  pushTodaysBreakfast(todaysBreakfast) {
    let breakfast = {
      date: this.dateToString(new Date()),
      items: todaysBreakfast,
      meal: 'breakfast'
    }
    this.nutritionService.pushTodaysMeal(breakfast)
      .subscribe(
        data => {
          if(!data.success) {
            this.openSnackBar(data.msg);
          }
          else {
            todaysBreakfast = null;
            this.openSnackBar(data.msg);
            this.getMealsForDate(new Date());
          }
        }
      );
    
  }

  // push todays lunch to database
  pushTodaysLunch(todaysLunch) {
    let lunch = {
      date: this.dateToString(new Date()),
      items: todaysLunch,
      meal: 'lunch'
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
            this.getMealsForDate(new Date());
          }
        }
      );
  }

  // push todays dinner to database
  pushTodaysDinner(todaysDinner) {
    let dinner = {
      date: this.dateToString(new Date()),
      items: todaysDinner,
      meal: 'dinner'
    }
    this.nutritionService.pushTodaysMeal(dinner)
      .subscribe(
        data => {
          if(!data.success) {
            this.openSnackBar(data.msg);
          }
          else {
            todaysDinner = null;
            this.openSnackBar(data.msg);
            this.getMealsForDate(new Date());
          }
        }
      );
  }

// push todays additionally to database
pushTodaysAdditionally(todaysAdditionally) {
  let additionally = {
    date: this.dateToString(new Date()),
    items: todaysAdditionally,
    meal: 'additionally'
  }
  this.nutritionService.pushTodaysMeal(additionally)
    .subscribe(
      data => {
        if(!data.success) {
          this.openSnackBar(data.msg);
        }
        else {
          todaysAdditionally = null;
          this.openSnackBar(data.msg);
          this.getMealsForDate(new Date());
        }
      }
    );
}

// get meals for specific date $$$$$$$(pass date in 'date' format, and function converts it to string)$$$$$$$$
getMealsForDate(date) {
  this.nutritionService.getMealsInfo(this.dateToString(date))
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

// delete food for specific meal, for today ########## getMealsForDate(this.dateToString(new Date())); **
deleteFood(food, quant, ind) {
  let date = this.dateToString(new Date());
  this.nutritionService.deleteFood(food, quant, this.mealNames[ind], date )
    .subscribe(
      data => {
        if(!data.success) {
          console.log(data.msg);
        }
        else {
          this.deleteMeal(date); // run cleaner
          this.getMealsForDate(new Date()); // <-- **
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

// when edit button clicked
editQuantity(food, quantity, id) {
  this.quantErrMsg = '';
  this.itemForEdit.food = food;
  this.itemForEdit.quantity = quantity;
  this.itemForEdit.id = id;
  //this.editingQuantity = true;
  this.quantityToEdit = quantity;
}

// check if this item is clicked to be edited
isEditing(id): boolean {
  if(this.itemForEdit.id == id) {
    return true;
  }
  else {
    return false;
  }
}

// on cancel editing
onCancelEditing() {
  this.quantErrMsg = '';
  this.itemForEdit.food = '';
  this.itemForEdit.quantity = '';
  this.itemForEdit.id = '';
}

// on save editing
onSaveEditing(i) {
  let num = Number(this.quantityToEdit);
  if(this.quantityToEdit == '' || num<1 || num>5000) {
    this.quantErrMsg = '*Please enter valid quantity in \'g\'';
  }
  else {
    this.quantErrMsg = '';
    let object = {
      date: this.dateToString(new Date()),
      food: this.itemForEdit.food,
      quant: this.itemForEdit.quantity,
      newQuant: this.quantityToEdit,
      mealName: this.mealNames[i]
    }
    this.nutritionService.updateSingleQuantity(object)
      .subscribe(
        data => {
          if(!data.success) {
            this.itemForEdit.food = '';
            this.itemForEdit.quantity = '';
            this.itemForEdit.id = '';
          }
          else {
            setTimeout(() => {
              this.itemForEdit.food = '';
              this.itemForEdit.quantity = '';
              this.itemForEdit.id = '';
            }, 300); // put inside setTimeout, because if put only after this.getMealsForDate(new Date()) , it will be 
                    // executed before update(getMealsForDate is asynchronous) and I dont want it executed first
            this.getMealsForDate(new Date()); // get all info again
            
          }
        }
      );
  }
}

// prepare array of dates for which we want to get info
// today not included in dates which are sent 
calculateDates() { //calculateDates should be called on Init
  let dates = [];
  let monthsAfter31 = [1, 3, 5, 7, 8, 10];
  let monthsAfter30 = [4, 6, 9, 11];
  let day = (new Date()).getDay();
  let date = (new Date()).getDate();
  let month = (new Date()).getMonth(); 
  let year = (new Date()).getFullYear();
  let numberOfDays;
  if(this.period == '3days') {
    numberOfDays = 3;
  }
  else if(this.period == 'week') {
    numberOfDays = day-1; // dont want today so -1
  }
  else if(this.period == 'month') {
    numberOfDays = date-1; // dont want today so -1
  }
  let count = 1;
  while(count <= numberOfDays) {
    if(date == 1) {
      if(monthsAfter31.includes(month)) {
        date = 31;
        month = month - 1;
      }
      else if(monthsAfter30.includes(month)) {
        date = 30;
        month = month - 1;
      }
      else if(month == 2) {
        date = 28;
        month = month - 1;
      }
      else if(month == 0) {
        date = 31;
        month = 11;
        year = year - 1;
      }
    }
    else {
      date = date - 1;
    }
    let month1 = month+1; // with this +1 I get correct date
    let s = new Date(month1+' '+date+','+year+' 02:00:00'); // only for check
    dates.push(this.dateToString(new Date(month1+' '+date+','+year+' 02:00:00')));
    count++;
  }
}

  // period name just for the template
  periodName() {
    switch(this.period) {
      case '3days':
        return 'My meals for: last 3 days';
      case 'week':
        return 'My meals for: this week';
      case 'month':
        return 'My meals for: this month';
      default: return '(error)'
    }
  }

  // on hide search
  onHideSearch() {
    this.showSearchInput = false;
    this.searchText = '';
    this.currentGrocerie = null;
    this.ind = -1;
    this.searchPerformed = false;
    this.searchedFood = null;
  }

  // set focus on expand search div
  onExpand() {
    this.showSearchInput = true;
    setTimeout(() => {
      this.foodSearch.nativeElement.focus();
    }, 100); // put a little timeout, because immediately template reference variable is not visible
  }



}
