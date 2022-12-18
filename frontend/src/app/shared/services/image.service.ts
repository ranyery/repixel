import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private _baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  public upload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>(this._baseUrl, formData);
  }
}
