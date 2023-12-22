import {FixtureObject} from "../../../model/FixtureObject";
import {MessageCodes} from "../../../model/BifrostError";

export class ProperNameError {

    bad_proper_name_1234 = new FixtureObject<string, string>('1234', '1234', {error: MessageCodes.FORMAT_INVALID_NAME.code});
    bad_proper_name_value = new FixtureObject<string, string>('val@bas-rhin', 'val@bas-rhin', {error:  MessageCodes.FORMAT_INVALID_NAME.code});
    bad_proper_name_jean_marc1 = new FixtureObject<string, string>('jean - marc ', 'jean - marc ', {error:  MessageCodes.FORMAT_INVALID_NAME.code});
    //bad_proper_name_jean_marc2 = new FixtureObject<string>('jean -marc ', 'jean -marc ', {error:  MessageCodes.FORMAT_INVALID_NAME.code});
    bad_proper_name_to_long = new FixtureObject<string, string>('jean-marc du chateau de la loire de la petite france, et de l\'alsace', 'jean-marc du chateau de la loire de la petite france, et de l\'alsace', {error:  MessageCodes.FORMAT_STRING_TOO_LONG.code});
    // @ts-ignore
    bad_proper_name_null = new FixtureObject<string, string>('null', null, {error: MessageCodes.BAD_FORMAT.code});
    // @ts-ignore
    bad_proper_name_undefined = new FixtureObject<string, string>('undefined', undefined, {error: MessageCodes.BAD_FORMAT.code});

    //bad_proper_name_to_short = new FixtureObject<string>('AA', 'AA', {error: 'ERR-0532'});

}
