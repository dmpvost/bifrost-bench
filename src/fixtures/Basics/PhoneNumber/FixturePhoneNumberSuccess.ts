import {FixtureObject} from "../../../model/FixtureObject";

export class FixturePhoneNumberSuccess {
    phone_1 = new FixtureObject<string,string>('06 45 77 17 73', '06 45 77 17 73', {success: '+33645771773'});
    phone_2 = new FixtureObject<string,string>('+33 6 45 77 17 73', '+33 6 45 77 17 73', {success: '+33645771773'});
    phone_3 = new FixtureObject<string,string>('00 33 6 45 77 17 73', '00 33 6 45 77 17 73', {success: '+33645771773'});
    phone_4 = new FixtureObject<string,string>(' 33 6 45 77 17 73', ' 33 6 45 77 17 73', {success: '+33645771773'});
    phone_5 = new FixtureObject<string,string>('‭+49 170 7744210‬', '‭+49 170 7744210‬', {success: '‭+491707744210‬'});
    phone_6 = new FixtureObject<string,string>('‭+48 660 463 497‬', '‭+48 660 463 497‬', {success: '‭+48660463497‬'});

}
