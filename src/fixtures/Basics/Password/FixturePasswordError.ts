import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError} from "../../../model/BifrostError";

export class FixturePasswordError {

    // @ts-ignore
    ERR_0175_password_undefined = new FixtureObject<string,LocalizeError>('undefined', undefined, {error: 'ERR-0175'});
    ERR_0123_password_too_short = new FixtureObject<string,LocalizeError>('password too short', 'p', {error: 'ERR-0123'});
    ERR_0174_password_too_long = new FixtureObject<string,LocalizeError>('password too long', 'pazfazfzeoegjojzaojazojpoazjdpoajzdpojazpdojazpodjpaozjdpoazjdpoazjdpoazjfifozjf', {error: 'ERR-0174'});

    ERR_0186_bad_id_or_bad_password = new FixtureObject<string,LocalizeError>('bad id or password', 'unMauvaisMDP', {error: 'ERR-0186'});

}
