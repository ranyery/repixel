import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompressRoutingModule } from './compress-routing.module';
import { CompressComponent } from './compress.component';

@NgModule({
  declarations: [CompressComponent],
  imports: [CommonModule, CompressRoutingModule],
  providers: [],
})
export class CompressModule {}
