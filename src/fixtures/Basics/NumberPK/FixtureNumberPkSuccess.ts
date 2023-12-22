import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureNumberPkSuccess {
    id_1 = new FixtureObject<number, number>('id:1', 1, {success: 1});
    id_2 = new FixtureObject<number, number>('id:2', 2, {success: 2});
    id_3 = new FixtureObject<number, number>('id:3', 3, {success: 3});
}
