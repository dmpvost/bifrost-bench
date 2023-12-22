import {FixtureObject} from "../../../model/FixtureObject";

export class ProperNameLastNameSuccess {

    proper_name_2 = new FixtureObject<string,string>('ostermann', 'osTermAnn', {success: 'Ostermann'});
    proper_name_3 = new FixtureObject<string,string>('cortinovis', 'coRtinovis', {success: 'Cortinovis'});

}
