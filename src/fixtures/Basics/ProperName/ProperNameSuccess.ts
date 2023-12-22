import {FixtureObject} from "../../../model/FixtureObject";

export class ProperNameSuccess {

    proper_name_1 = new FixtureObject<string, string>('vincent', 'vincent', {success: 'Vincent'});
    proper_name_2 = new FixtureObject<string, string>('ostermann', 'osTermAnn', {success: 'Ostermann'});
    proper_name_3 = new FixtureObject<string, string>('jean-marc', 'jean-marc', {success: 'Jean-marc'});
    proper_name_4 = new FixtureObject<string, string>('jean-marc du chateau', 'jean-marc du chateau', {success: 'Jean-marc du chateau'});
    proper_name_5 = new FixtureObject<string, string>('gérard', 'gérard', {success: 'Gérard'});
    proper_name_6 = new FixtureObject<string, string>('munster', 'munster', {success: 'Munster'});

}
