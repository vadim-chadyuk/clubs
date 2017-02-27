import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import ILinkService from "../shared/ilink.service";
import IClubService from "../shared/iclub.service";

/**
 * Component for club list
 */
@Component({
    selector: 'club-list',
    template: require('./club-list.component.html'),
    styles: [ require('./club-list.component.scss') ]
})
export default class ClubListComponent {
    clubs: any;

    constructor(@Inject("clubService") private clubService: IClubService,
                @Inject("linkService") private linkService: ILinkService,
                private router: Router) {
        this.clubs = clubService.getAll();
    }

    /**
     * Handler for opening club
     */
    openClub(key: string) {
        this.router.navigate([ '/clubs/', key ]);
    }
}
