import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConvertComponent, formatos } from './convert.component';

const routes: Routes = [];

routes.push({ path: '', component: ConvertComponent });

for (const x of formatos) {
  for (const y of formatos) {
    if (x === y) continue;

    routes.push({
      path: `${x}-para-${y}`,
      component: ConvertComponent,
      data: { de: x, para: y },
    });
  }
}

routes.push({ path: '**', redirectTo: '' });

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertRoutingModule {}
