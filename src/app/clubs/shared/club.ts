import IClub from "./iclub";

/**
 * Club object
 */
export default class Club implements IClub {
    constructor(public name: string, public description: string, public link: string) {

    }
}
