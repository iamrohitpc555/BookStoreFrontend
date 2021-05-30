import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DisplaybookComponent } from './components/displaybook/displaybook.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { BooksearchpipePipe } from './Pipe/booksearchpipe.pipe';
import { CartComponent } from './components/cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { OrdergreetingComponent } from './components/ordergreeting/ordergreeting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DisplaybookComponent,
    BooksearchpipePipe,
    CartComponent,
    OrdergreetingComponent,
   
  ],
  imports: [
    MatBadgeModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule
    
    

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
