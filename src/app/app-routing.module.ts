import { ConfigComponent } from './pages/config/config.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ErrorComponent } from './error/error.component'; 

const routes: Routes = [
    { path: '', component: PagesComponent }, 
    { path: 'config', component: ConfigComponent },
    //{ path: '**', redirectTo: 'error/404', pathMatch: 'full' },
    //{ path: 'error/404', component: ErrorComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  