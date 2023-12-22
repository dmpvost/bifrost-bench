import {FixtureObject} from "../../../../model/FixtureObject";
import {LocalizeError, MessageCodes} from "../../../../model/BifrostError";

export class MockUuidSyntaxeError {
    ERR_0510_bad_uuid_1 = new FixtureObject<string, LocalizeError>('bad_uuid_1', '8ea1fcfea9706-4c27-aa73-b90e31583a92', {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
    ERR_0510_bad_uuid_2 = new FixtureObject<string, LocalizeError>('bad_uuid_2', '4295aeaf-07e1-4f4f-8e39caa63c01e3683', {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
    ERR_0510_bad_uuid_3 = new FixtureObject<string, LocalizeError>('bad_uuid_3', 'b70fffed-8052z4706-99b1-89aeefbef572', {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
    ERR_0510_bad_uuid_4 = new FixtureObject<string, LocalizeError>('bad_uuid_4', 'b70fffed-8052z4706-99b1', {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
    // @ts-ignore
    ERR_0514_bad_uuid_undefined = new FixtureObject<string, LocalizeError>('undefined', undefined, {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
    // @ts-ignore
    ERR_0514_bad_uuid_null = new FixtureObject<string, LocalizeError>('null', null, {error: MessageCodes.FORMAT_BAD_UUID_FORMAT.code});
}
