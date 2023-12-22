import {FixtureObject} from "../../../model/FixtureObject";

export class ProperNameError {

    bad_proper_name_1234 = new FixtureObject<string, string>('1234', '1234', {error: 'ERR-0530'});
    bad_proper_name_value = new FixtureObject<string, string>('val@bas-rhin', 'val@bas-rhin', {error: 'ERR-0530'});
    bad_proper_name_jean_marc1 = new FixtureObject<string, string>('jean - marc ', 'jean - marc ', {error: 'ERR-0530'});
    //bad_proper_name_jean_marc2 = new FixtureObject<string>('jean -marc ', 'jean -marc ', {error: 'ERR-0530'});
    bad_proper_name_to_long = new FixtureObject<string, string>('jean-marc du chateau de la loire de la petite france, et de l\'alsace', 'jean-marc du chateau de la loire de la petite france, et de l\'alsace', {error: 'ERR-0531'});
    // @ts-ignore
    bad_proper_name_null = new FixtureObject<string, string>('null', null, {error: 'ERR-0520'});
    // @ts-ignore
    bad_proper_name_undefined = new FixtureObject<string, string>('undefined', undefined, {error: 'ERR-0520'});

    //bad_proper_name_to_short = new FixtureObject<string>('AA', 'AA', {error: 'ERR-0532'});

}
