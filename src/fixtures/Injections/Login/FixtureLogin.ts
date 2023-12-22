import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureLogin {

    login_ostermann_vincent = new FixtureObject<{
        login: string,
        password: string
    }, string>('login with ostermann.vincent@gmail.com', {
        login: 'ostermann.vincent@gmail.com',
        password: 'password',
    }, {
        success: 'true'
    });

    ERR_0186_bad_id_or_password = new FixtureObject<{
        login: string,
        password: string
    }, string>('Identifiant ou mot de passe incorrect', {
        login: 'ostermann.vincent@gmail.com',
        password: 'password684456',
    }, {
        error: 'ERR-0186'
    });

    ERR_0367_id_not_found = new FixtureObject<{
        login: string,
        password: string
    }, string>('Identifiant inexistant', {
        login: 'ostermann.vincent56456@gmail.com',
        password: 'password684456',
    }, {
        error: 'ERR-0367'
    });

}
