import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
    redirectTo: 'redimensionar-imagem',
  },
  {
    path: 'converter-imagem',
    loadChildren: () =>
      import('./pages/convert/convert.module').then((m) => m.ConvertModule),
  },
  {
    path: 'comprimir-imagem',
    loadChildren: () =>
      import('./pages/compress/compress.module').then((m) => m.CompressModule),
  },
  {
    path: 'redimensionar-imagem',
    loadChildren: () =>
      import('./pages/resize/resize.module').then((m) => m.ResizeModule),
  },
  {
    path: '**',
    redirectTo: 'redimensionar-imagem',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
