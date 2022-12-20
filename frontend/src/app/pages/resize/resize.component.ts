import { Component, OnInit } from '@angular/core';
import {
  ImageService,
  ImageSnippet,
} from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss'],
})
export class ResizeComponent implements OnInit {
  public width!: number;
  public height!: number;

  public xScale: number = 100;
  public yScale: number = 100;

  public lockAspectRatio: boolean = true;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  uploadHandler({ files }: { files: File[] }) {
    if (!files) return;

    const file = files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      const image = new ImageSnippet(event.target.result, file);

      this.imageService.upload(image.file).subscribe({
        next: (data) => {
          console.log('Data:', data);
        },
        error: (error) => {
          console.log('🔴 Error:', error);
        },
      });
    });

    reader.readAsDataURL(file);
  }
}
