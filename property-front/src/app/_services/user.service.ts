import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { IUser } from '@app/_models/IUser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    apiEndpoint = 'api/users';

    constructor(private _http: HttpClient) { }

    getAll(): Observable<IUser[]> {
        return this._http.get<IUser[]>(`${environment.apiUrl}/${this.apiEndpoint}`);
    }

    getUser(id: number): Observable<any> {
        return this._http.get<any>(`${environment.apiUrl}/${this.apiEndpoint}/${id}`)
    }

    saveUser(user: User): Observable<User> {
        /** @TODO: This call the save the user isn't saving the user correctly - or, it's maybe saving the user to the users array on the in mem service, not the fake-backend */
        const headers = new HttpHeaders({ 'Content-Type' : 'application/json' })
        return this._http.post<User>(`${environment.apiUrl}/${this.apiEndpoint}`, user, { headers : headers });
      }

    getAuthUser(): Observable<IUser> {
        /** TODO: Fix - this is returning null at the moment */
        return this._http.get<IUser>(`${environment.apiUrl}/${this.apiEndpoint}/auth`);
    }

    createUser(body: IUser): Observable<IUser> {
        return this._http.post<IUser>(`${environment.apiUrl}/${this.apiEndpoint}/register`, body);
    }

    updateUser(body: IUser): Observable<IUser> {
        return this._http.put<IUser>(`${environment.apiUrl}/${this.apiEndpoint}`, body);
    }

    updateUserPassword(body: {}): Observable<IUser> {
        return this._http.put<IUser>(`${environment.apiUrl}/${this.apiEndpoint}/password`, body);
    }
}