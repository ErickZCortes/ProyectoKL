import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// components
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { AgregarComponent } from './agregar/agregar.component';
// route
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { RegisterComponent } from './register/register.component';
import { SugerenciasComponent } from './principal/sugerencias/sugerencias.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// service
import { ItemsService } from './services/items.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    AgregarComponent,
    LoginComponent,
    SecondComponent,
    RegisterComponent,
    SugerenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ItemsService,
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
