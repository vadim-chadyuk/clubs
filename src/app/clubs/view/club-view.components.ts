import { Component, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import ILinkService from "../shared/ilink.service";
import IClubService from "../shared/iclub.service";
import IClub from "../shared/iclub";

/**
 * Component for club view component
 */
@Component({
    selector: 'club-view',
    template: require('./club-view.component.html')
})
export default class ClubViewComponent {
    name: string;
    description: string;
    link: string;

    constructor(@Inject("clubService") private clubService: IClubService,
                @Inject("linkService") private linkService: ILinkService,
                private route: ActivatedRoute,
                private router: Router) {
        clubService.get(route.snapshot.params[ 'id' ]).then((club: IClub) => {
            this.name = club.name;
            this.description = club.description;
            this.link = club.link;
        });
    }

    /**
     * Go to clubs view
     */
    gotoList() {
        this.router.navigate([ '/clubs/' ]);
    }
}
