import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError} from "../../../model/BifrostError";

export class FixtureUndefinedNumberError {

    // @ts-ignore
    var_number_null = new FixtureObject<number, LocalizeError>('null', null, {error: 'ERR-0520'});
    // @ts-ignore
    var_number_undefined = new FixtureObject<number, LocalizeError>('undefined', undefined, {error: 'ERR-0520'});

}
