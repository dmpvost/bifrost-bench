import {FixtureObject} from "../../../model/FixtureObject";
import {LocalizeError, MessageCodes} from "../../../model/BifrostError";

export class FixtureNumberPkError {
    // @ts-ignore
    id_null = new FixtureObject<number, LocalizeError>('id:0', null, {error: MessageCodes.BAD_FORMAT.code});
    // @ts-ignore
    id_undefined = new FixtureObject<number, LocalizeError>('id:undefined', undefined, {error: MessageCodes.BAD_FORMAT.code});
}
