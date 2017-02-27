import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import AppComponent from "./app.component";
import AppRoutingModule from "./app-routing.module";
import ClubsModule from "./clubs/clubs.module";
import FirebaseModule from "../firebase/index";
import { FormsModule } from "@angular/forms";

/**
 * General module
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        FirebaseModule,
        ClubsModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
