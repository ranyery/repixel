import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenubarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
