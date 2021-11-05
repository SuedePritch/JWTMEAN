import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

//Components - UI
import { SidenavComponent } from './components/sidenav/sidenav.component';

//Components - pages
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { WhmisComponent } from './components/whmis/whmis.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';
import { FlhaComponent } from './components/flha/flha.component';
import { CovidComponent } from './components/covid/covid.component';
import { ConcernComponent } from './components/concern/concern.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthService } from './service/auth.service';
import { ValidateService } from './service/validate.service';
// import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    EmergencyComponent,
    DocumentsComponent,
    CertificatesComponent,
    IncidentsComponent,
    WhmisComponent,
    SiteDetailsComponent,
    FlhaComponent,
    CovidComponent,
    ConcernComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
