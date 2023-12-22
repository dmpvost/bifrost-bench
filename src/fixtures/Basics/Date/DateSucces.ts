import {FixtureObject} from "../../../model/FixtureObject";

export class DateSucces {

    date_01_01_2020_1 = new FixtureObject<string, Date>('01/01/2020', '01/01/2020', {success: new Date('01/01/2020')});
    date_01_01_2020_2 = new FixtureObject<string, Date>('01 01 2020', '01 01 2020', {success: new Date('01 01 2020')});
    date_01_01_2020_3 = new FixtureObject<Date, Date>('01 01 2020', new Date('01 01 2020'), {success: new Date('01 01 2020')});

    date_now = new FixtureObject<Date, Date>('new Date()', new Date(), {success: new Date()});
    date_now_plus_14days = new FixtureObject<Date, Date>('new Date()+14 days', new Date(Date.now() + 1000 * 60 * 60 * 24 * 14), {success: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14)});
    date_2019_01_01 = new FixtureObject<Date, Date>('new Date(\'01/01/2019\')', new Date('01/01/2019'), {success: new Date('01/01/2019')});
    date_2025_01_01 = new FixtureObject<Date, Date>('new Date(\'01/01/2025\')', new Date('01/01/2025'), {success: new Date('01/01/2025')});
    date_2021_04_14 = new FixtureObject<string, string>('2021-04-14T13:02:11.000Z', '2021-04-14T13:02:11.000Z', {success: '2021-04-14T13:02:11.000Z'});

    date_epoch_2020_04_14_second = new FixtureObject<number, Date>('Epoch second 1586869331', 1586869331, {success: new Date('2020-04-14T13:02:11.000Z')});
    date_epoch_2020_04_14_second_V2 = new FixtureObject<number, Date>('second 1604406342.593', 1604406342.593, {success: new Date('2020-11-03T12:25:43.000Z')});

    date_epoch_2020_04_14_milli = new FixtureObject<number, Date>('Epoch milli 1586869331000', 1586869331000, {success: new Date('2020-04-14T13:02:11.000Z')});
    date_epoch_2020_04_14_micro = new FixtureObject<number, Date>('Epoch micro 1586869331000000', 1586869331000000, {success: new Date('2020-04-14T13:02:11.000Z')});
    date_epoch_2020_04_14_nano = new FixtureObject<number, Date>('Epoch nano 1586869331000000000', 1586869331000000000, {success: new Date('2020-04-14T13:02:11.000Z')});

}
