import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advert } from '@app/_models/advert';
import { IAdvert } from '@app/_models/IAdvert';
import { ISearchTerms } from '@app/_models/ISearchTerms';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this._http.get<any>(`${environment.apiUrl}/${this.apiEndpoint}`);
  }

  getSearchedAdverts(): Observable<IAdvert[]> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/${this.apiEndpoint}`)
  }

  getUserAdverts(id: number): Observable<any> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/${this.apiEndpoint}`)
    /** @Note: This would be removed and handled by the API when there is one */
      .pipe(
        map(x => {
          return x.filter(advert => advert.userId === id)
        })
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
      parkingSpaces: null
    }
  }


}
