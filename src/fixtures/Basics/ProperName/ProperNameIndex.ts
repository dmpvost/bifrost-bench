import {ProperNameSuccess} from "./ProperNameSuccess";
import {ProperNameError} from "./ProperNameError";
import {ProperNameFirstNameSucces} from "./ProperNameFirstNameSucces";
import {ProperNameLastNameSuccess} from "./ProperNameLastNameSucces";

export class ProperNameIndex {
    success = new ProperNameSuccess();
    success_firstName = new ProperNameFirstNameSucces();
    success_lastName = new ProperNameLastNameSuccess();
    error = new ProperNameError();
}
