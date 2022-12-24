import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';

import { ImageService } from 'src/app/shared/services/image.service';

import { ConvertRoutingModule } from './convert-routing.module';
import { ConvertComponent } from './convert.component';

@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    ConvertRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    RadioButtonModule,
    SliderModule,
  ],
  providers: [ImageService],
})
export class ConvertModule {}
