import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    getAuthUser(): Observable<IUser> {
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