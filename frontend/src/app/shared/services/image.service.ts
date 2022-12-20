import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUploadSettings } from '../interfaces/IUploadConfig';

export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  private _baseUrl = '/api';

  constructor(private http: HttpClient) {}

  public upload(image: File, settings: IUploadSettings): Observable<any> {
    const { width, height, xScale, yScale, lockAspectRatio } = settings;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('width', String(width));
    formData.append('height', String(height));
    formData.append('xScale', String(xScale));
    formData.append('yScale', String(yScale));
    formData.append('lockAspectRatio', String(lockAspectRatio));

    return this.http.post<any>(this._baseUrl, formData);
  }
}
