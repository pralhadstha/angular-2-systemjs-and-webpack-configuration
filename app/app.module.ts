import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule ], //All other modules than NgModule
	declarations: [ AppComponent ], //All components we are using in this module
	bootstrap: [ AppComponent ] //Core component we are using
})

export class AppModule {}