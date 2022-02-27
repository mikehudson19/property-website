import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/_models/user';



@Injectable({
  providedIn: 'root'
})

export class InMemoryUserService {

  userUrl: string = 'http://localhost:3000/api/users';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.userUrl);
  }

  getUser(id: number): Observable<Object> {
    const url: string = `${this.userUrl}/${id}`
    return this._http.get<Object>(url);
  }

  saveUser(user: User): Observable<User> {
    /** @TODO: This call the save the user isn't saving the user correctly - or, it's maybe saving the user to the users array on the in mem service, not the fake-backend */
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' })
    return this._http.post<User>(this.userUrl, user, { headers : headers });
  }
}