import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureEnterpriseNameSuccess {

    bas_rhin = new FixtureObject<string,boolean>('bas rhin', 'bas rhin', {success: true});
    psa = new FixtureObject<string,boolean>('PSA', 'PSA', {success: true});
    safran = new FixtureObject<string,boolean>('safran', 'safran', {success: true});
    audi = new FixtureObject<string,boolean>('audi', 'audi', {success: true});

}
