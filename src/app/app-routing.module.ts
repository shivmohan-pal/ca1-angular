import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Components/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'content',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents =[HomeComponent,RegisterComponent,LoginComponent,ContentComponent];