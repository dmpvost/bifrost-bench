import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError} from "../../../model/BifrostError";

export class FixtureUndefinedStringError {

    // @ts-ignore
    var_string_null = new FixtureObject<string, LocalizeError>('null', null, {error: 'ERR-0520'});
    // @ts-ignore
    var_string_undefined = new FixtureObject<string, LocalizeError>('undefined', undefined, {error: 'ERR-0520'});

}
