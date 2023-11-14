import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserModule } from './components/loginuser/loginuser.module';
import { HomeDoubleVModule } from './components/homedoublev/HomeDoubleV.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginUserModule,
    HomeDoubleVModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
