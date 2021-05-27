﻿import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

import { User } from "@app/_models";

const users: User[] = [
  {
    id: 1,
    email: "test@test",
    password: "test",
    firstName: "Test",
    lastName: "User",
    // password: "test",
    contactNumber: "0765698964"
  },
  {
    id: 2,
    email: "test2@test",
    password: "test2",
    firstName: "Test2",
    lastName: "Test2Suranme",
    // confirmPass: "test2",
    contactNumber: "0824593652"
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/users/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/users") && method === "GET":
          return getUsers();
        case url.endsWith("/users") && method === "PUT":
          return updateUser();
        case url.endsWith("/users/password") && method === "PUT":
          return updatePassword();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      const user = users.find(
        (x) => x.email === email && x.password === password
      );
      if (!user) return error("Username or password is incorrect");

      return ok({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        contactNumber: user.contactNumber,
        token: "fake-jwt-token",
      });
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function updateUser() {
      const { email, forenames, surname, id } = body;
      const user = users.find((x) => x.id === id);
      return ok({
        id: user.id,
        email: email,
        forenames: forenames,
        surname: surname,
        token: "fake-jwt-token",
      });
    }

    function updatePassword() {
      const { currentPassword, password, confirmPass } = body;
      const user = users.find((x) => x.password === currentPassword);
      if (!user) return error("Current password is incorrect");
      return ok({
        password: password,
        confirmPass: confirmPass,
      });
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-jwt-token";
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
