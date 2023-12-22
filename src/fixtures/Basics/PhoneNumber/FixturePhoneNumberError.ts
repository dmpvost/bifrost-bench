import {FixtureObject} from "../../../model/FixtureObject";
import {MessageCodes} from "../../../model/BifrostError";

export class FixturePhoneNumberError {

    ERR_0148_1234 = new FixtureObject<string, string>('1234', '1234', {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code});
    ERR_0148_336546468815132112 = new FixtureObject<string, string>('+336546468815132112', '+336546468815132112', {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code});
    ERR_0148_3364577177 = new FixtureObject<string, string>('+3364577177', '+3364577177', {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code});
    ERR_0148_336457717733 = new FixtureObject<string, string>('+336457717733', '+336457717733', {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code});
    ERR_0148_45771773 = new FixtureObject<string, string>('45771773', '45771773', {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code});

}
