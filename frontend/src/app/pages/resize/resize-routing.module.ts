import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResizeComponent } from './resize.component';

const routes: Routes = [{ path: '', component: ResizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResizeRoutingModule {}
