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

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  uploadHandler({ files }: { files: File[] }) {
    if (!files) return;

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
          console.log('🟢 Data:', data);
        },
        error: (error) => {
          console.log('🔴 Error:', error);
        },
      });
    });

    reader.readAsDataURL(file);
  }
}
