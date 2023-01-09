import { Component, OnInit } from '@angular/core';

import { IItemProps } from './models/ItemProps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public items: IItemProps[] = [
    {
      icon: 'compress',
      title: 'Compress IMAGE',
      description:
        'Comprima JPG,PNG, SVG, e GIFs enquanto economiza espaço e mantém a qualidade.',
      link: 'comprimir-imagem',
    },
    {
      icon: 'resize',
      title: 'Resize IMAGE',
      description:
        'Defina suas dimensões por porcentagens ou pixeis e redimensione suas imagens JPG, PNG, SVG, e GIF.',
      link: 'redimensionar-imagem',
    },
    {
      icon: 'crop',
      title: 'Crop IMAGE',
      description:
        'Recorte uma imagem definindo um retângulo em pixels. Recorte imagens JPG, PNG ou GIF.',
      link: 'cortar-imagem',
    },
    {
      icon: 'convert',
      title: 'Convert to JPG',
      description:
        'Transforme imagens em formato PNG, GIF, TIF, PSD, SVG, WEBP, HEIC, ou RAW em JPG em lote e de forma fácil.',
      link: 'converter-imagem',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
