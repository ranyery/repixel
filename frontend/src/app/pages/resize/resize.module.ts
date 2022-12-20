import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageService } from 'src/app/shared/services/image.service';

import { ResizeRoutingModule } from './resize-routing.module';
import { ResizeComponent } from './resize.component';

@NgModule({
  declarations: [ResizeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ResizeRoutingModule,
    CheckboxModule,
    FileUploadModule,
    InputNumberModule,
  ],
  providers: [ImageService],
})
export class ResizeModule {}
