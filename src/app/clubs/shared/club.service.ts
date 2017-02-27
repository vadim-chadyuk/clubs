import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import Club from "./club";
import IClub from "./iclub";
import IClubService from "./iclub.service";

/**
 * Service for working with club
 */
@Injectable()
export default class ClubService implements IClubService {
    private clubsObservable: FirebaseListObservable<IClub[]>;

    constructor(private af: AngularFire) {
        this.clubsObservable = af.database.list('/clubs');
    }

    /**
     * @inheritDoc
     */
    create(name: string, description: string, link: string): Promise<IClub> {
        return this.clubsObservable.push(new Club(name, description, link));
    }

    /**
     * @inheritDoc
     */
    getAll(): FirebaseListObservable<IClub[]> {
        return this.clubsObservable;
    }

    /**
     * @inheritDoc
     */
    get(key): Promise<IClub> {
        return new Promise(resolve =>
            this.af.database.object(`/clubs/` + key, { preserveSnapshot: true }).subscribe(snap => resolve(snap.val()))
        );
    }
}
