import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RestapiService} from './restapi.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManangerDashboardComponent } from './components/mananger-dashboard/mananger-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { BasicComponent } from './components/basic/basic.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    LogInComponent,
    RegisterComponent,
    UserHomePageComponent,
    AdminDashboardComponent,
    ManangerDashboardComponent,
    DashboardComponent,
    LayoutsComponent,
    AdvanceComponent,
    BasicComponent,
    FormsComponent,
    TablesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    RestapiService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
