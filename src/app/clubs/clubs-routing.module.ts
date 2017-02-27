import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import ClubListComponent from "./list/club-list.component";
import ClubViewComponent from "./view/club-view.components";
import ClubCreateComponent from "./create/club-create.component";

const clubsRoutes: Routes = [
    { path: 'clubs', component: ClubListComponent },
    { path: 'clubs/:id', component: ClubViewComponent },
    { path: 'create', component: ClubCreateComponent }
];
/**
 * Module for clubs routing
 */
@NgModule({
    imports: [
        RouterModule.forChild(clubsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export default class ClubsRoutingModule {
}
