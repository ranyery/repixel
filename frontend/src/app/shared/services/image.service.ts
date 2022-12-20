import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUploadSettings } from '../interfaces/IUploadConfig';

export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  private _baseUrl = 'https://api.converterimagem.com';

  constructor(private http: HttpClient) {}

  public upload(image: File, settings: IUploadSettings): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    const headers = new HttpHeaders().set('settings', JSON.stringify(settings));

    return this.http.post<any>(this._baseUrl, formData, { headers });
  }
}
