import { Component, OnInit } from '@angular/core';
import { IUploadSettings } from 'src/app/shared/interfaces/IUploadConfig';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss'],
})
export class ResizeComponent implements OnInit {
  public fileToUpload: File | null = null;

  public width: number = 1280;
  public height: number = 720;

  public xScale: number = 100;
  public yScale: number = 100;

  public lockAspectRatio: boolean = false;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  public uploadHandler({ files }: { files: File[] }) {
    if (files.length === 0) return;

    this.fileToUpload = files[0];
    const reader = new FileReader();

    const settings: IUploadSettings = {
      width: this.width,
      height: this.height,
      xScale: this.xScale,
      yScale: this.yScale,
      lockAspectRatio: this.lockAspectRatio,
    };

    reader.addEventListener('load', () => {
      this.imageService.upload(this.fileToUpload!, settings).subscribe({
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

  public onSelect({ files }: { files: File[] }) {
    if (files.length === 0) return;

    this.fileToUpload = files[0];
  }

  public onRemove() {
    this.fileToUpload = null;
  }

  public onChangeXScale(value: number): void {
    if (this.lockAspectRatio) {
      this.xScale = value;
      this.yScale = value;
      return;
    }

    this.xScale = value;
  }

  public onChangeYScale(value: number): void {
    if (this.lockAspectRatio) {
      this.xScale = value;
      this.yScale = value;
      return;
    }

    this.yScale = value;
  }
}
