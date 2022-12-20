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

  // Just to test
  public hasImageConverted: any = null;

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
          this.hasImageConverted = data;
          console.log('🟢 Success:', data);
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
