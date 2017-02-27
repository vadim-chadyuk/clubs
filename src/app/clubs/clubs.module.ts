import { NgModule } from "@angular/core";
import ClubListComponent from "./list/club-list.component";
import ClubViewComponent from "./view/club-view.components";
import ClubsRoutingModule from "./clubs-routing.module";
import { CommonModule } from "@angular/common";
import ClubCreateComponent from "./create/club-create.component";
import { FormsModule } from "@angular/forms";
import ClubService from "./shared/club.service";
import LinkService from "./shared/link.service";

/**
 * Module for clubs
 */
@NgModule({
    providers: [ { provide: 'clubService', useClass: ClubService }, {
        provide: 'linkService',
        useClass: LinkService
    } ],
    imports: [
        CommonModule,
        ClubsRoutingModule,
        FormsModule
    ],
    declarations: [
        ClubListComponent,
        ClubViewComponent,
        ClubCreateComponent
    ]
})
export default class ClubsModule {
}

