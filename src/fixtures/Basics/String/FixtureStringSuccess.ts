import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureStringSuccess {

    string1 = new FixtureObject<string, boolean>('texte1', 'texte1', {success: true});
    string2 = new FixtureObject<string, boolean>('texte 1 texte 2 texte 3', 'texte 1 texte 2 texte 3', {success: true});

}
