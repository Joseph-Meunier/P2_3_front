import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./error/not-found/not-found.component";

export const routes: Routes = [
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent},
  // { path: 'settings', component: SettingsComponent },
  // { path: 'profile', component: ProfilComponent },
  {
    path: '',
    children: [
      {
        path: 'eventpro',
        loadChildren: () => import('./eventpro/proeventmodule').then(m => m.ProEventModule)
      }
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];
