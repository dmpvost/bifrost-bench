import {FixtureObject} from "../../../model/FixtureObject";

export class FixturePasswordSuccess {

    password = new FixtureObject<string,string>('password', 'password', {success: 'password'});
    strong = new FixtureObject<string,string>('P@SSwORd!', 'P@SSwORd!', {success: 'P@SSwORd!'});

}
