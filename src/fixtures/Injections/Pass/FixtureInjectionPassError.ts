import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureInjectionPassError {

    pass_user_all_success = new FixtureObject<{
        cust_uuid: string,
        code_pass: string,
    }, string>('code_pass OK cust_uuid OK', {
        cust_uuid:'eb76cb26-8a47-417b-bf78-7d7a215cb12e',
        code_pass: '3270125694',
    }, {
        error: 'ERR-0502'
    });


}
