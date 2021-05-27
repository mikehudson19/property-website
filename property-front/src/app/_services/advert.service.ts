import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advert } from '@app/_models/advert';
import { IAdvert } from '@app/_models/IAdvert';
import { ISearchTerms } from '@app/_models/ISearchTerms';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private _http: HttpClient) {}

  getAdvert(id: number): Observable<IAdvert> {
    if (id === 0) {
      return of(this.initializeAd());
    }
    
    return this._http.get<IAdvert>(`${environment.apiUrl}/adverts/${id}`);
  }

  getAllAdverts(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/adverts`);
  }

  getSearchedAdverts(): Observable<IAdvert[]> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/api/adverts/search`);
  }

  getUserAdverts(): Observable<any> {
    return this._http.get<IAdvert[]>(`${environment.apiUrl}/adverts`);
  }

  createAdvert(advert: IAdvert): Observable<IAdvert> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<IAdvert>(`${environment.apiUrl}/adverts`, advert, { headers });
  }
  /** @TODO: Pass the advert ID and request body seperatley here so i'm not using advert.id as the param */
  updateAdvert(advert: IAdvert): Observable<IAdvert> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put<IAdvert>(`${environment.apiUrl}/adverts/${advert.id}`, advert, { headers });
  }

  deleteAdvert(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._http.delete<IAdvert>(`${environment.apiUrl}/adverts/${id}`, { headers });
  }

  initializeAd(): IAdvert {
    return {  
      title: '',
      province: '',
      city: '',
      details: '',
      price: null,
      status: ''
    }
  }


}
