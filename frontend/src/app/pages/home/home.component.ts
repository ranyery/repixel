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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio libero, itaque sunt impedit tenetur accusamus alias animi non quis.',
      link: 'comprimir-imagem',
    },
    {
      icon: 'resize',
      title: 'Resize IMAGE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio libero, itaque sunt impedit tenetur accusamus alias animi non quis.',
      link: 'redimensionar-imagem',
    },
    {
      icon: 'crop',
      title: 'Crop IMAGE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio libero, itaque sunt impedit tenetur accusamus alias animi non quis.',
      link: 'cortar-imagem',
    },
    {
      icon: 'convert',
      title: 'Convert to JPG',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio libero, itaque sunt impedit tenetur accusamus alias animi non quis.',
      link: 'converter-imagem',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
