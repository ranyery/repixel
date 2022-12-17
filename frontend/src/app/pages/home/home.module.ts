import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageService } from 'src/app/shared/services/image.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FileUploadModule,
  ],
  providers: [ImageService],
})
export class HomeModule {}
