import { Injectable } from "@angular/core";
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
    contactNumber: "0765698964",
    favourites: [1, 2]
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
        case url.includes("/users") && !url.endsWith("/users") && method === "GET":
          return getUser(url);
        case url.endsWith("/users/password") && method === "PUT":
          return updatePassword();
        case url.endsWith("/users") && method === "POST":
          return createUser();
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
        favourites: user.favourites
      });
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getUser(url) {
      if (!isLoggedIn()) return unauthorized();
      const startPoint = url.lastIndexOf("/") + 1;
      const endPoint = url.length;
      const userId = url.slice(startPoint, endPoint);

      const user = users.find(user => user.id === +userId);
      return ok(user);
    }

    function updateUser() {
      /** @TODO: Change the value stored in localstorage as well..? */
      const { email, firstName, lastName, contactNumber, id } = body;
      const user = users.find((x) => x.id === id);

      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.contactNumber = contactNumber;

      return ok({
        id: user.id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
        token: "fake-jwt-token",
      });
    }

    function updatePassword() {
      const { currentPassword, password, confirmPass } = body;
      /** @ TODO: Change this - we might have two users with the same password */
      const user = users.find((x) => x.password === currentPassword);
      if (!user) return error("Current password is incorrect");
      user.password = password;
      return ok({
        password: password,
        confirmPass: confirmPass,
      });
    }

    function createUser() {
      let user = body;

      const numberOfUsers = users.length;
      user.id = numberOfUsers + 1;

      users.push(user);

      return ok({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
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
