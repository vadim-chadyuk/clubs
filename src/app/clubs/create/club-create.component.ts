import { Component, Inject } from "@angular/core";
import IClubService from "../shared/iclub.service";
import ILinkService from "../shared/ilink.service";
import { Router } from "@angular/router";

/**
 * Club creator component
 */
@Component({
    selector: 'club-create',
    template: require("./club-create.component.html"),
})
export default class ClubCreateComponent {
    name = '';
    description = '';
    isValidData = false;
    fileToUpload: File;

    constructor(@Inject("clubService") private clubService: IClubService,
                @Inject("linkService") private linkService: ILinkService,
                private router: Router) {
    }

    /**
     * Event handler for changing file
     */
    fileChangeEvent(fileInput: any) {
        this.fileToUpload = fileInput.target.files[ 0 ];
        this.validate();
    }

    /**
     * Check validation for club
     */
    validate() {
        this.isValidData = !!(this.name && this.description && this.fileToUpload);
    }

    /**
     * Create new club
     */
    create() {
        this.linkService.upload(this.fileToUpload)
            .then((link: string) => {
                this.clubService.create(this.name, this.description, link).then(() => this.gotoList());

            });
    }

    /**
     * Go to link url
     */
    gotoList() {
        this.router.navigate([ '/clubs/' ]);
    }
}
