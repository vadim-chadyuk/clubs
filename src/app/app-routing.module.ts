import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [ { path: '', redirectTo: '/clubs', pathMatch: 'full' } ];

/**
 * App routing module
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export default class AppRoutingModule {
}
