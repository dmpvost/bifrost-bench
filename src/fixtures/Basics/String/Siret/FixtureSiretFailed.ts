import {LocalizeError, MessageCodes} from "../../../../model/BifrostError";
import {FixtureObject} from "../../../../model/FixtureObject";

export class FixtureSiretFailed {

    ERR_0543_caracters_15 = new FixtureObject<number, LocalizeError>('15 caracteres', 833523707000280, {error: MessageCodes.FORMAT_INVALID_SIRET.code});
    ERR_0543_caracters_13 = new FixtureObject<number, LocalizeError>('13 caracteres', 8335237070002, {error: MessageCodes.FORMAT_INVALID_SIRET.code});
    ERR_0543_caracters_14 = new FixtureObject<string, LocalizeError>('14+ caracteres string', '8553352370700012A223', {error: MessageCodes.FORMAT_INVALID_SIRET.code});

}
