import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'initial',
    pathMatch: 'full'
  },
  {
    path: 'initial',
    loadChildren: () => import('./pages/initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgotPassword/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sidemenu',
    loadChildren: () => import('./pages/sidemenu/sidemenu.module').then(m => m.SidemenuPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
