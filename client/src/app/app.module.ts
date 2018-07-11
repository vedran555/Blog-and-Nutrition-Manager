import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './services/config.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ScreenService } from './services/screen.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { BlogService } from './services/blog.service';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { UserComponent } from './components/user/user.component';
import { ValidateComment } from './services/comment-validator';
import { ClickOutsideDirective } from './services/dropdown.directive';
import { KeydownEventDirective } from './services/dropdown-item.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NutritionManagerComponent } from './components/nutrition-manager/nutrition-manager.component';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { MealsComponent } from 'src/app/components/meals/meals.component';
import { EarlierDaysComponent } from 'src/app/components/earlier-days/earlier-days.component';
import { EditMealComponent } from 'src/app/components/edit-meal/edit-meal.component';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProfileComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarItemComponent,
    LogoutComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    UserComponent,
    ValidateComment,
    ClickOutsideDirective,
    KeydownEventDirective,
    NutritionManagerComponent,
    MealsComponent,
    EarlierDaysComponent,
    EditMealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FlashMessagesModule.forRoot(),
    MatNativeDateModule
    
  ],
  providers: [ 
    ConfigService,
    ScreenService,
    AuthService,
    AuthGuardService,
    LoginGuardService,
    BlogService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
