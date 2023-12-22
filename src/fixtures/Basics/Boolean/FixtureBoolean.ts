import {FixtureObject} from "../../../model/FixtureObject";
import {MessageCodes} from "../../../model/BifrostError";

export class FixtureBoolean {

    boolean_true = new FixtureObject<boolean, boolean>('boolean true', true, {success: true});
    boolean_false = new FixtureObject<boolean, boolean>('boolean false', false, {success: true});
    //@ts-ignore
    ERR_boolean_null = new FixtureObject<boolean, boolean>('boolean null', null, {error: MessageCodes.BAD_FORMAT});
    //@ts-ignore
    ERR_boolean_undefined = new FixtureObject<boolean, boolean>('boolean undefined', undefined, {success: MessageCodes.BAD_FORMAT});

}
