import {FixtureUndefinedStringError} from "./FixtureUndefinedStringError";
import {FixtureUndefinedNumberError} from "./FixtureUndefinedNumberError";


export class FixtureUndefinedIndex {
    error_string = new FixtureUndefinedStringError();
    error_number =  new FixtureUndefinedNumberError();
}
