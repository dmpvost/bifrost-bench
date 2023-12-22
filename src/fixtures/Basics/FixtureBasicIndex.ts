import {MockUuidIndex} from "./Uuid/MockUuidIndex";
import {FixtureEmailIndex} from "./Email/FixtureEmailIndex";
import {FixturePhoneNumberIndex} from "./PhoneNumber/FixturePhoneNumberIndex";
import {DateIndex} from "./Date/DateIndex";
import {ProperNameIndex} from "./ProperName/ProperNameIndex";
import {FixturePasswordIndex} from "./Password/FixturePasswordIndex";
import {FixtureNumberPkIndex} from "./NumberPK/FixtureNumberPkIndex";
import {FixtureStringIndex} from "./String/FixtureStringIndex";
import {FixtureUndefinedIndex} from "./UndefinedError/FixtureUndefinedIndex";
import {FixtureEnterpriseNameSuccess} from "./EnterpriseName/FixtureEnterpriseNameSuccess";
import {FixtureBoolean} from "./Boolean/FixtureBoolean";

export class FixtureBasicIndex {

    UUID = new MockUuidIndex();
    boolean = new FixtureBoolean();
    Email = new FixtureEmailIndex();
    EnterpriseName = new FixtureEnterpriseNameSuccess();
    PhoneNumber = new FixturePhoneNumberIndex();
    Date = new DateIndex();
    ProperName = new ProperNameIndex();
    Password = new FixturePasswordIndex();
    NumberPk = new FixtureNumberPkIndex();
    string = new FixtureStringIndex();
    UndefinedAndNull = new FixtureUndefinedIndex();
}
