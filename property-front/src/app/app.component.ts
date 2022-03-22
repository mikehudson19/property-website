import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements AfterContentChecked {

    class: string;

    constructor(private router: Router) {}

    ngAfterContentChecked(): void {
        const url = this.router.url;

        if (url === "/" || url === "/home") {
            return;
        } else {
            this.class = "mt-auto"
            return;
        }
    }
}