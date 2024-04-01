import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServiceComponent } from './services/service.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './services/auth.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent 
   },

     {
      path: 'menu',
      component: MenuComponent 
     },
     {
      path: 'login',
      component: LoginComponent
     },
     {
      path: 'signup',
      component: SignupComponent
     },
     {
      path:'contacto',
      component: ContactoComponent
     } 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ServiceComponent,
    MenuComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule, 
    AuthModule,    
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
