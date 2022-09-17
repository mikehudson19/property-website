import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertGalleryService {

  private apiEndpoint = 'api/advert-galleries';

  constructor(
      private readonly httpClient: HttpClient
  ) { }

  public getAdvertGalleries(advertId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${this.apiEndpoint}?advertId=${advertId}`);
  }

  public getAdvertHeadlineImages(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${this.apiEndpoint}/headlineImages`);
  }
}
