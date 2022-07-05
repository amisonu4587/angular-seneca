import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './property/property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EditPropertyComponent } from './edit-property/edit-property.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PropertyComponent,
    AddPropertyComponent,
    EditPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
