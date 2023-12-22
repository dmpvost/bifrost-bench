import {FixtureObject} from "../../../model/FixtureObject";

export class ProperNameFirstNameSucces{

    proper_name_1 = new FixtureObject<string,string>('vincent', 'vincent', {success: 'Vincent'});
    proper_name_3 = new FixtureObject<string,string>('jean-marc', 'jean-marc', {success: 'Jean-marc'});
    proper_name_5 = new FixtureObject<string,string>('gérard', 'gérard', {success: 'Gérard'});

}
