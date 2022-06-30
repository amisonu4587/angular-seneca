import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {PropertyComponent} from './property/property.component';
import {AddPropertyComponent} from './add-property/add-property.component'
import { AuthGuard } from './auth.guard';
import {PropertyResolver} from './property.resolver'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'seneca',
    component: HeaderComponent,
    canActivateChild:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'property', component: PropertyComponent,resolve: { message: PropertyResolver } },
      { path: 'add-property', component: AddPropertyComponent },
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
