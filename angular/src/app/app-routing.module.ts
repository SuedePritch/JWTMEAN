import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';


import { CertificatesComponent } from './components/certificates/certificates.component';
import { ConcernComponent } from './components/concern/concern.component';
import { CovidComponent } from './components/covid/covid.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { FlhaComponent } from './components/flha/flha.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';
import { WhmisComponent } from './components/whmis/whmis.component';
import { AuthGuard } from './guards/auth.guards';




const routes: Routes = [
  {path:'', component:FlhaComponent},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},

  {path:'emergency', component: EmergencyComponent},
  {path:'documents', component: DocumentsComponent, canActivate:[AuthGuard]},
  {path:'certificates', component:CertificatesComponent, canActivate:[AuthGuard]},
  {path:'incidents', component: IncidentsComponent, canActivate:[AuthGuard]},
  {path:'whmis', component: WhmisComponent},
  {path:'site-details', component: SiteDetailsComponent},
  {path:'flha', component: FlhaComponent},
  {path:'covid', component: CovidComponent},
  {path:'concern', component: ConcernComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
