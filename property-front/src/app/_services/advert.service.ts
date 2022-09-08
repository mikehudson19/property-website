import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdvert } from '@app/_models/IAdvert';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  apiEndpoint = 'api/adverts';

  constructor(private _http: HttpClient) {}

  getAdvert(id: number): Observable<IAdvert> {
    if (id === 0) {
      return of(this.initializeAd());
    }

    return this._http.get<IAdvert>(`${environment.apiUrl}/${this.apiEndpoint}/${id}`);
  }

  getAllAdverts(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/${this.apiEndpoint}`)
    /** @NOTE: Filtering for advert status would be handled by the API */
    // Commented this out for now as adverts.filer was throwing a console error
      // .pipe(
      //   map(adverts => {
      //     return adverts.filter(ad => ad.status == "Live");
      //   })
      // );
  }

  getSearchedAdverts(): Observable<IAdvert[]> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/${this.apiEndpoint}`)
  }

  getUserAdverts(id: number): Observable<any> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/${this.apiEndpoint}`)
    /** @Note: This would be removed and handled by the API when there is one */
      .pipe(
        // Commenting this out as it's breaking and needs to be on the API
        // map(x => {
        //   return x.filter(advert => advert.userId === id);
        // })
      );
  }

  createAdvert(advert: IAdvert): Observable<IAdvert> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<IAdvert>(`${environment.apiUrl}/${this.apiEndpoint}`, advert, { headers });
  }

  /** @TODO: Pass the advert ID and request body seperatley here so i'm not using advert.id as the param */
  updateAdvert(advert: IAdvert): Observable<IAdvert> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put<IAdvert>(`${environment.apiUrl}/${this.apiEndpoint}/${advert.id}`, advert, { headers });
  }

  deleteAdvert(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._http.delete<IAdvert>(`${environment.apiUrl}/${this.apiEndpoint}/${id}`, { headers });
  }

  initializeAd(): IAdvert {
    return {  
      title: '',
      province: '',
      city: '',
      details: '',
      price: null,
      status: '',
      bedrooms: null,
      bathrooms: null,
      parkingSpaces: null,
      images: [],
      headlineImage: '',
      dateCreated: new Date()
    }
  }


}
