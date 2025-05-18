import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { CopyrightComponent } from './copyright/copyright.component';

export const routes: Routes = [
    {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
     path: 'home', component: HomeComponent
  },

  {
    path:'agendamento', component: AgendaComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'contato', component: ContatoComponent
  },
  {
    path:'copyright', component: CopyrightComponent
  },


];
