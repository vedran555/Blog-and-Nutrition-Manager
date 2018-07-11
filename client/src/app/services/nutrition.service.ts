import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  //domain = 'http://localhost:8080/';
  domain = '';
  options;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  // creating authentication header
  createAuthenticationHeader() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  // post user's physical info to database
  addPhysicalInfo(info) {
    this.createAuthenticationHeader();
    return this.http.post(this.domain + 'nutrition/postPhysicalInfo', info, this.options)
      .map(res => res.json());
  }

  // check if user has already provided physical info and get it for possible update
  checkForInfo() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'nutrition/getInfo', this.options)
      .map(res => res.json());
  }

  // edit user's physical info
  editInfo(editedInfo) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'nutrition/editInfo', editedInfo, this.options)
      .map(res => res.json());
  }

  // add or edit meals
  provideMeals(meals) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'nutrition/editMeals', meals, this.options)
      .map(res => res.json());
  }

  // check for food in groceries collection
  checkForFood(food) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'nutrition/checkForFood/' + food, this.options)
      .map(res => res.json());
  }

  // get all groceries containing sent text in the name
  getMathedGroceries(food) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'nutrition/searchGroceries/' + food, this.options)
      .map(res => res.json());
  }
  
  // push today's breakfast to database
  pushTodaysMeal(meal) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'nutrition/pushMeal', meal, this.options)
      .map(res => res.json());
  }
  
  // get meals info
  getMealsInfo(date) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'nutrition/getMealsInfo/' + date, this.options)
      .map(res => res.json());
  }

  // delete food from meal(breakfast,lunch,dinner or additionaly) for specific date
  deleteFood(food, quant, meal, date) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'nutrition/deleteFood/?food='+food+'&quant='+quant+'&meal='+meal+'&date='+date,
    this.options)
      .map(res => res.json());
  }

  // check if meals is empty and delete it if it is
  deleteMeal(date) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'nutrition/deleteMeal/' + date, this.options)
      .map(res => res.json());
  }

  // update single quantity
  updateSingleQuantity(object) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'nutrition/editSingleFood', object, this.options)
      .map(res => res.json());
  }

  // get meals info for period 
  getSomeMeals(period) {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'nutrition/getSomeMeals/' + period, this.options)
      .map(res => res.json());
  }

  // remove meal document for date passed
  removeMeal(date) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'nutrition/removeMeal/' + date, this.options)
      .map(res => res.json());
  }

  // search groceries by food name
  searchGroceries(foodName) {
    this.createAuthenticationHeader();
    console.log('from nutrition service, foodName= '+foodName);
    return this.http.get(this.domain + 'nutrition/searchGroceriesByName/' + foodName, this.options)
      .map(res => res.json());
  }

  sss() {
    console.log('sss called - msg from nutr service')
    return this.http.get(this.domain + 'proba/bbb/?username=senka&date=20-05-2018')
      .map(res => res.json());
  }
}