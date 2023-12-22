import {FixtureObject} from "../../../../model/FixtureObject";

export class FixtureSiretSuccess {

    Oxycar = new FixtureObject<number, boolean>('Oxycar', 83352370700028, {success: true});
    Redberry = new FixtureObject<number, boolean>('Redberry', 82948031800023, {success: true});
    Myfood = new FixtureObject<number, boolean>('Myfood', 81524878600024, {success: true});

}
