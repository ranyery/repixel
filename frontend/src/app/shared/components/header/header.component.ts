import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Converter IMAGEM',
        routerLink: 'converter-imagem',
      },
      {
        label: 'Comprimir IMAGEM',
        routerLink: 'comprimir-imagem',
      },
      {
        label: 'Redimensionar IMAGEM',
        routerLink: 'redimensionar-imagem',
      },
    ];
  }
}
