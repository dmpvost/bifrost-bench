import {FixtureObject} from "../../../model/FixtureObject";

export class FixtureEmailSuccess  {

    ostermannVincentAtGmailComOK = new FixtureObject<string,string>('ostermann.vincent@gmail.com', 'ostermann.vincent@gmail.com', {
        success: 'ostermann.vincent@gmail.com'
    });
    ostermannVincentAtGmailComStrangeString = new FixtureObject<string,string>(' %20 ostermann.vincent%40gmail.com %20', ' %20 ostermann.vincent%40gmail.com %20', {
        success: 'ostermann.vincent@gmail.com'
    });

}
