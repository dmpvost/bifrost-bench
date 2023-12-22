import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError, MessageCodes} from "../../../model/BifrostError";

export class FixtureEmailError {

    err_email_1234 = new FixtureObject<string, LocalizeError>('1234', '1234', {error: MessageCodes.FORMAT_BAD_EMAIL_FORMAT.code});
    err_email_without_end = new FixtureObject<string, LocalizeError>('val@bas-rhin', 'val@bas-rhin', {error: MessageCodes.FORMAT_BAD_EMAIL_FORMAT.code});
    err_email_bad_email = new FixtureObject<string, LocalizeError>('val.fr', 'val.fr', {error: MessageCodes.FORMAT_BAD_EMAIL_FORMAT.code});
    // @ts-ignore
    err_email_undefined = new FixtureObject<string, LocalizeError>('undefined', undefined, {error: MessageCodes.BAD_FORMAT.code});
    // @ts-ignore
    err_email_null = new FixtureObject<string, LocalizeError>('null', null, {error: MessageCodes.BAD_FORMAT.code});

}
