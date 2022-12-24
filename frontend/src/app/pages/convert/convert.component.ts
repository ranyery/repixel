import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/shared/services/image.service';

export const formatos: ReadonlyArray<string> = [
  'jpg',
  'png',
  'webp',
  'svg',
  'gif',
  'avif',
  'tiff',
];

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  public allowedFormats: ReadonlyArray<string> = formatos;

  public formatBase!: string;
  public formatToConvert: string = 'jpg';

  public imageQuality: number = 80;

  public fileToUpload: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    if (Object.keys(data).length === 0) return;

    const { de, para } = data;

    this.formatBase = de;
    this.formatToConvert = para;
  }

  public uploadHandler({ files }: { files: File[] }) {
    if (files.length === 0) return;

    this.fileToUpload = files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.imageService
        .convert(this.fileToUpload!, this.formatToConvert, this.imageQuality)
        .subscribe({
          next: (data) => {
            const imageLink = document.createElement('a');
            imageLink.href = data?.base64;
            imageLink.download = data?.originalname;
            imageLink.style.display = 'none';
            imageLink.style.visibility = 'hidden';
            document.body.appendChild(imageLink);
            imageLink.click();
            document.body.removeChild(imageLink);
          },
          error: (error) => {
            console.log('🔴 Error:', error);
          },
        });
    });

    reader.readAsDataURL(this.fileToUpload);
  }

  public onSelect({ files }: { files: File[] }): void {
    if (files.length === 0) return;
    this.fileToUpload = files[0];
  }

  public onRemove(): void {
    this.fileToUpload = null;
  }
}
