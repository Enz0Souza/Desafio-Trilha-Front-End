import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';

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


];
