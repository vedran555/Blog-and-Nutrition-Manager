import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { UserComponent } from './components/user/user.component';
import { NutritionManagerComponent } from './components/nutrition-manager/nutrition-manager.component';
import { EditMealComponent } from 'src/app/components/edit-meal/edit-meal.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
    { path: 'blog', component: BlogComponent, canActivate:[AuthGuardService] },
    { path: 'edit-blog/:id', component: EditBlogComponent, canActivate:[AuthGuardService] },
    { path: 'delete-blog/:id', component: DeleteBlogComponent, canActivate:[AuthGuardService] },
    { path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService] },
    { path: 'user/:username', component: UserComponent, canActivate:[AuthGuardService] },
    { path: 'nutritionmanager', component: NutritionManagerComponent, canActivate:[AuthGuardService] },
    { path: 'edit-meal/:date', component: EditMealComponent, canActivate:[AuthGuardService] },
    { path: 'register', component: RegisterComponent, canActivate:[LoginGuardService] },
    { path: 'login', component: LoginComponent, canActivate:[LoginGuardService] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(routes) ],
    providers: [ ],
    bootstrap: [ ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }