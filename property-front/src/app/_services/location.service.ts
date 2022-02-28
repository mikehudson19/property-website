import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation } from '@app/_models/ILocation';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiEndpoint = 'api/cities';

  constructor(private _http: HttpClient) { }

  list(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/${this.apiEndpoint}`);
  }
}
