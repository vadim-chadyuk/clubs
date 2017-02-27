import "rxjs/add/observable/merge";
import "rxjs/add/operator/switchMap";
import { Injectable, Inject } from "@angular/core";
import { FirebaseApp } from "angularfire2";
import ILinkService from "./ilink.service";

/**\
 * Service for working with store
 */
@Injectable()
export default class LinkService implements ILinkService {
    private _storageRef: firebase.storage.Reference;

    constructor(@Inject(FirebaseApp) firebaseApp: any) {
        this._storageRef = firebaseApp.storage().ref();
    }

    /**
     * @inheritDoc
     */
    upload(file: File): Promise<String> {
        const name = Math.random().toString();
        let uploadTask = this._storageRef.child(name).put(file);
        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed', ({ f }) => console.log(f),
                e => reject(e),
                () => {
                    this._storageRef.child(name).getDownloadURL()
                        .then(url => resolve(url));
                }
            );
        })
    }
}
