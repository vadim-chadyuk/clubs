import IClub from "./iclub";
import { FirebaseListObservable } from "angularfire2";

/**
 * Interface for service of Club object
 */
interface  IClubService {
    /**
     * Create new club.
     * @return Promise<IClub>
     */
    create(name: string, description: string, link: string): Promise<IClub>;

    /**
     * Get all clubs
     * @return {FirebaseListObservable<IClub[]>}
     */
    getAll(): FirebaseListObservable < IClub[ ] >;

    /**
     * Get club by key
     * @return {Promise<IClub>}
     */
    get(key: string): Promise<IClub>;
}

export default IClubService;
