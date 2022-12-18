import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public uploadedFiles: File[] = [];
  private selectedFile!: any;

  public hasImageConverted: boolean = false;
  public convertedImage: any;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  uploadHandler({ files }: { files: File[] }) {
    if (!files) return;
    this.hasImageConverted = false;

    for (let f of files) {
      this.uploadedFiles.push(f);
    }

    const file = files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      console.log('Event image:', event);

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.upload(this.selectedFile.file).subscribe({
        next: (data) => {
          this.convertedImage = data;
          this.hasImageConverted = true;
        },
        error: (error) => {
          console.log('🔴 Error:', error);
        },
      });
    });

    reader.readAsDataURL(file);
  }
}
