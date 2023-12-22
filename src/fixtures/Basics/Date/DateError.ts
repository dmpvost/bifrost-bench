import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError, MessageCodes} from "../../../model/BifrostError";

export class DateError  {

    ERR_0519_01_01_2001 = new FixtureObject<string, LocalizeError>('01/01/2001', '01/01/2001', {error: MessageCodes.DATE_OUT_OF_RANGE_TOO_SMALL.code});
    ERR_0518_01_01_2045 = new FixtureObject<string, LocalizeError>('01/01/2045', '01/01/2045', {error: MessageCodes.DATE_OUT_OF_RANGE_TOO_BIG.code});
    ERR_0519_01012045 = new FixtureObject<string, LocalizeError>('01012045', '01012045', {error: MessageCodes.DATE_OUT_OF_RANGE_TOO_BIG.code});
    ERR_0517_0101T2045 = new FixtureObject<string, LocalizeError>('0101T2045', '0101T2045', {error: MessageCodes.FORMAT_BAD_DATE_FORMAT.code});
    // @ts-ignore
    ERR_0516_undefined = new FixtureObject<string, LocalizeError>('undefined', undefined, {error: MessageCodes.FORMAT_DATE_UNDEFINED.code});
    // @ts-ignore
    ERR_0516_null = new FixtureObject<string, LocalizeError>('null', null, {error: MessageCodes.BAD_FORMAT.code});
}
