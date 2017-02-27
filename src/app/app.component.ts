import { Component } from "@angular/core";

/**
 * General component
 */
@Component({
    styles: [ require("./app.component.scss") ],
    selector: 'app',
    template: `
    <nav  class="navbar navbar-toggleable-md navbar-light bg-faded">
        <a routerLink="/" >Home</a>
    </nav>
    <div class="app-size center">
        <router-outlet></router-outlet>
    </div>
`
})
export default class AppComponent {
}
