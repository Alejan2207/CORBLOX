import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
      },
      {
        path: 'recomendaciones',
        loadChildren: () => import('./pages/recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
