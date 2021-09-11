import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./view/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./view/solutions/solutions.module').then(m => m.SolutionsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./view/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./view/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./view/careers/careers.module').then(m => m.CareersModule)
  },
  {
    path: 'contactUs',
    loadChildren: () => import('./view/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
