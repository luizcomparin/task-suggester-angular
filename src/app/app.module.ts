import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './pages/config/config.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonToggleModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        ConfigComponent,
        PagesComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
