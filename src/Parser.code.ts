import {LocalizeError, MessageCodes} from "../src/model/BifrostError";
import {Validator} from "class-validator";
import {Guid} from "../src/model/Guid";
import {format} from "date-fns";
import {reg_proper_name} from "../src/model/regex";
import {parsePhoneNumber} from "awesome-phonenumber";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

//
// i18n.dayNames =
//     [
//         "Dim",
//         "Lun",
//         "Mar",
//         "Mer",
//         "Jeu",
//         "Ven",
//         "Sam",
//         "Dimanche",
//         "Lundi",
//         "Mardi",
//         "Mercredi",
//         "Jeudi",
//         "Vendredi",
//         "Samedi",
//     ];
//
//
// i18n.monthNames = [
//     "Jan",
//     "Fev",
//     "Mar",
//     "Avr",
//     "Mai",
//     "Juin",
//     "Juil",
//     "Aou",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
// ];
//
//
// i18n.timeNames = ["a", "p", "am", "pm", "A", "P", "AM", "PM"];

export class ParserCode {
    constructor() {
    }

    /*
    RETURN PHONE OR NULL
    or throw err
     */
    public phoneNumber(phone: string, throwError: boolean = true): string {
        if (phone) {
            phone = phone.replace(" ", "");
        }

        this.isNotEmpty(phone, "phone");

        if (phone) {
            let pn = parsePhoneNumber(phone, {regionCode: "fr"});
            if (pn.valid) {
                return pn.number.e164;
            } else {
                if (throwError === true) {
                    throw new LocalizeError(MessageCodes.FORMAT_PHONE_NUMBER_ERROR);
                }
            }
            return phone;
        } else {
            // @ts-ignore
            return null;
        }
    }

    public reformatEmail(email: string, field: string, validEmailPattern: boolean = true): string {
        try {
            this.isNotEmpty(email, field);

            let initialEmail: string = email;
            let reformatedEmail: string = email;
            try {
                if (reformatedEmail) {
                    // I made this volontary, because sometimes, data are encoded many times
                    reformatedEmail = decodeURI(reformatedEmail);
                    reformatedEmail = decodeURI(reformatedEmail);
                    reformatedEmail = decodeURI(reformatedEmail);
                    reformatedEmail = decodeURI(reformatedEmail);
                    reformatedEmail = reformatedEmail.replace(/%2540/g, "%40");
                    reformatedEmail = reformatedEmail.replace(/%2520/g, "%20");
                    reformatedEmail = reformatedEmail.replace(/%25/g, "%");
                    reformatedEmail = reformatedEmail.replace(/%20/g, "");
                    reformatedEmail = reformatedEmail.replace(/%40/g, "@");
                    reformatedEmail = reformatedEmail.replace(/\s/g, "");
                    reformatedEmail = reformatedEmail.trim();
                    reformatedEmail = reformatedEmail.toLowerCase();
                }
                this.isNotEmpty(reformatedEmail, field);
                let v: Validator = new Validator();
                let isMailValid = v.isEmail(reformatedEmail);
                if (isMailValid === false) {
                    throw new LocalizeError(MessageCodes.FORMAT_BAD_EMAIL_FORMAT, "mail is not validate");
                }
            } catch (e: any) {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_EMAIL_FORMAT, e?.message);
            }
            return reformatedEmail;
        } catch (e) {
            throw e;
        }
    }

    public validator_UUID(uuid: Guid | string | UUID, field: string, extraMessage?: string): string {
        try {
            if (!uuid || uuid === undefined || uuid === null) {
                if (extraMessage) {
                    extraMessage = " : " + extraMessage;
                } else {
                    extraMessage = " ";
                }
                throw new LocalizeError(MessageCodes.FORMAT_BAD_UUID_FORMAT);
            }
            let v: Validator = new Validator();
            if (!v.isUUID(uuid)) {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_UUID_FORMAT);
            }
            return uuid as string;
        } catch (e) {
            throw e;
        }
    }

    public validator_date(
        date: string | Date | number,
        field: string,
        minDate: Date = new Date("01/01/2017"),
        maxDate: Date = new Date("01/01/2040")
    ): Date {
        try {
            //console.log("input -> validator_date:", date, field);

            if (!date) {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_DATE_FORMAT);
            }

            let dateReceived: Date;
            if (date instanceof Date) {
                // date
                // console.log("Date -> instance of : Date");
                dateReceived = new Date(date);
            }
            // @ts-ignore
            else if (isNaN(date) === false) {
                //console.log("Date -> instance of : Number", date);
                // number epoch
                date = Math.round(date as number);
                dateReceived = new Date(0);

                if (date.toString().length >= 19) {
                    // @ts-ignore
                    dateReceived.setTime(date / 1000 / 1000);
                    //console.log("Epoch: Detect nano second!", dateReceived);
                } else if (date.toString().length >= 16) {
                    // @ts-ignore
                    dateReceived.setTime(date / 1000);
                    //console.log("Epoch: Detect micro second!", dateReceived);
                } else if (date.toString().length >= 13) {
                    // @ts-ignore
                    dateReceived.setTime(date);
                    //console.log("Epoch: Detect milli second! ", dateReceived);
                } else if (date.toString().length >= 10) {
                    // @ts-ignore
                    dateReceived.setTime(date * 1000);
                    //console.log("Epoch: Detect second!", dateReceived);
                } else {
                    //console.log("Epoch: No detection!", dateReceived);
                }
            } else {
                dateReceived = new Date(date);
            }

            if (!dateReceived) {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_DATE_FORMAT, "undefined");
            }

            let validator: Validator = new Validator();

            if (!validator.isDate(dateReceived) && !validator.isDateString(dateReceived)) {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_DATE_FORMAT, field + ": Bad date format [" + dateReceived + "]");
            }
            if (dateReceived > maxDate) {
                throw new LocalizeError(MessageCodes.DATE_OUT_OF_RANGE_TOO_BIG, "maxDate: " + format(maxDate, 'dd/MM/yyyy'));
            }
            if (dateReceived < minDate) {
                throw new LocalizeError(MessageCodes.DATE_OUT_OF_RANGE_TOO_SMALL, "minDate: " + format(minDate, 'dd/MM/yyyy'));
            }

            return dateReceived;
        } catch (e) {
            throw e;
        }
    }

    public validator_date_greater(d1: Date, d2: Date) {
        try {
            d1 = this.validator_date(d1, "d1");
            d2 = this.validator_date(d2, "d2");

            if (d1 > d2) {
                throw new LocalizeError(MessageCodes.DATE_OUT_OF_RANGE_TOO_SMALL,
                    "d2(" + d2.toISOString() + ") should be greater than d1(" + d1.toISOString() + ")",
                );
            }
        } catch (e) {
            throw e;
        }
    }

    public validator_time(time_in_second: number): number {
        try {
            if (time_in_second < 60 * 60 * 24) {
                return time_in_second;
            } else {
                throw new LocalizeError(MessageCodes.FORMAT_BAD_DATE_FORMAT, "Wrong time, it's greater that a day! (" + time_in_second + ")");
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * Input: 28800
     * Ouput: 08:00:00
     * @param time_in_second
     */
    public convert_timeSecondToTimeString(time_in_second: number, format_with_second: boolean): string {
        time_in_second = this.validator_time(time_in_second);
        let hours = Math.floor(time_in_second / 3600);
        let minutes = Math.floor((time_in_second - hours * 3600) / 60);
        let seconds = time_in_second - hours * 3600 - minutes * 60;

        let finalTime: string;
        if (hours < 10) {
            finalTime = "0" + hours;
        } else {
            finalTime = "" + hours;
        }
        if (minutes < 10) {
            finalTime = finalTime + ":" + "0" + minutes;
        } else {
            finalTime = finalTime + ":" + minutes;
        }
        if (format_with_second) {
            if (seconds < 10) {
                finalTime = finalTime + ":0" + seconds;
            } else {
                finalTime = finalTime + ":" + minutes;
            }
        }
        return finalTime;
    }

    /**
     * Input: 08:00
     * Output: 28800
     * @param time_in_second
     */
    public convert_timeStringToTimeSecond(time_in_second: string): number {
        if (time_in_second && time_in_second.indexOf(":") > -1) {
            let ss: string[] = time_in_second.split(":");
            let hours: number = 0;
            let minutes: number = 0;
            let seconds: number = 0;

            if (ss[0]) {
                hours = parseInt(ss[0], 10);
                if (hours >= 24) {
                    throw new Error("Bad hours time format >=24");
                }
            }
            if (ss[1]) {
                minutes = parseInt(ss[1], 10);
                if (minutes >= 60) {
                    throw new Error("Bad minutes time format >=24");
                }
            }
            if (ss[2]) {
                seconds = parseInt(ss[2], 10);
                if (seconds >= 60) {
                    throw new Error("Bad minutes time format >=24");
                }
            }

            let totalTime: number = hours * 3600 + minutes * 60 + seconds;
            return totalTime;
        } else {
            throw new Error("Bad time format");
        }
    }

    public dateDiffInMinutes(a: Date, b: Date) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes());
        return Math.floor((utc2 - utc1) / 60000);
    }

    public valid_apikey(apikey: string): string {
        try {
            if (!apikey) {
                //console.error("Apikey [" + apikey + "]");
                throw new LocalizeError(MessageCodes.JWT_ERROR, "APIKEY undefined");
            }
            if (apikey.length < 5) {
                //console.error("Apikey [" + apikey + "]");
                throw new LocalizeError(MessageCodes.JWT_ERROR, "Apikey is too short");
            }

            if (apikey.length > 120) {
                //console.error("Apikey [" + apikey + "]");
                throw new LocalizeError(MessageCodes.JWT_FORMAT, "Apikey is too long");
            }
            return apikey;
        } catch (e) {
            throw e;
        }
    }

    public valid_proper_name(properName: string, allowEmptyOrUndefined: boolean, field: string): string {
        try {
            this.isNotEmpty(properName, "properName");

            if (allowEmptyOrUndefined === true && !properName) {
                return properName;
            }

            if (allowEmptyOrUndefined === false && !properName) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NAME, "missing: " + field);
            }

            if (properName.length > 60) {
                throw new LocalizeError(MessageCodes.FORMAT_NAME_TOO_LONG, "Name is too long");
            }

            if (properName.length <= 1) {
                throw new LocalizeError(MessageCodes.FORMAT_NAME_TOO_SHORT, "Name is too short");
            }

            properName = properName.trim();
            properName = properName.toLowerCase();

            properName = this.initCap(properName);

            properName = properName.replace(/[^a-zA-Z -âāáǎàçêēéěèīíǐìôōóǒòūúǔùǖǘǚǜüĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙǕǗǙǛÜ@]/g, " ");
            properName = properName.replace(/\s\s+/g, " ");

            const regexProperName = RegExp(reg_proper_name);
            if (!regexProperName.test(properName)) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NAME, "Invalid proper name");
            }

            return properName;
        } catch (e) {
            throw e;
        }
    }

    public valid_string(
        properName: string,
        allowEmptyOrUndefined: boolean,
        field: string,
        maxLength: number = 120,
        specificErrorCode: string = "ERR-0520",
        minLength: number = 1
    ): string {
        try {
            this.isNotEmpty(properName, field, specificErrorCode);

            if (allowEmptyOrUndefined === true && !properName) {
                return properName;
            }

            if (allowEmptyOrUndefined === false && !properName) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NAME, "missing: " + field + ":" + properName);
            }

            if (properName.length >= maxLength) {
                throw new LocalizeError(MessageCodes.FORMAT_STRING_TOO_LONG, field + ": String is too long");
            }

            if (properName.length < minLength) {
                throw new LocalizeError(MessageCodes.FORMAT_STRING_TOO_SHORT, field + ": String is too short");
            }

            properName = properName.trim();
            properName = properName.toLowerCase();

            properName = this.initCap(properName);

            return properName;
        } catch (e) {
            throw e;
        }
    }

    private initCap(text: string) {
        return text.toLowerCase().replace(/(?:^|\b)[a-z]/, function initCap(m) {
            return m.toUpperCase();
        });
    }

    public isNotEmpty(value: any, field: string, specialCodeError: string = "ERR-0520") {
        try {
            if (value === undefined) {
                throw new LocalizeError(MessageCodes.BAD_FORMAT, "missing: " + field + " : " + value);
            }
            if (value === null) {
                throw new LocalizeError(MessageCodes.BAD_FORMAT, "missing: " + field + " : " + value);
            }
        } catch (e) {
            throw e;
        }
    }

    public isValidNumber(nombre: number, field: string): number {
        try {
            this.isNotEmpty(nombre, field);
            if (isNaN(nombre)) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NUMBER, "Not an number:" + nombre + "[" + field + "]");
            }
            return Number(nombre);
        } catch (e) {
            throw e;
        }
    }

    public isValidNumberEntier(nombre: number, field: string): number {
        try {
            this.isNotEmpty(nombre, field);
            if (isNaN(nombre)) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NUMBER, "Not an integer:" + nombre + "[" + field + "]");
            }

            let hasDecimal = nombre - Math.floor(nombre) !== 0;

            if (hasDecimal) {
                throw new LocalizeError(MessageCodes.FORMAT_INVALID_NUMBER, "Ce nombre doit être un entier: " + nombre + "[" + field + "]");
            }

            return Number(nombre);
        } catch (e) {
            throw e;
        }
    }

    public isSIRET(siret: any, field: string): any {
        this.isNotEmpty(siret, field);
        let siretString: string = siret.toString();
        siretString = siretString.replace(/\s/g, "");
        this.isValidNumber(parseInt(siretString, 10), field);
        if (this.verify_siret_or_siren(parseInt(siretString, 10), 14) === false) {
            throw new LocalizeError(MessageCodes.FORMAT_INVALID_SIRET, "Invalid Siret [" + field + " : " + siretString + "]");
        }
        return siretString;
    }

    // tslint:disable-next-line:variable-name
    private verify_siret_or_siren(number: any, size: number) {
        if (!number) {
            return false;
        }
        if (/[^0-9-\s]+/.test(number)) {
            return false;
        }
        if (number.toString().length !== size) {
            return false;
        }
        //The Luhn Algorithm. It's so pretty.
        // tslint:disable-next-line:one-variable-per-declaration
        let nCheck = 0,
            nDigit = 0,
            bEven = false;
        //number = number.replace(/\D/g, "");
        for (let n = number.length - 1; n >= 0; n--) {
            let cDigit = number.charAt(n);
            nDigit = parseInt(cDigit, 10);
            if (bEven) {
                // tslint:disable-next-line:no-conditional-assignment
                if ((nDigit *= 2) > 9) {
                    nDigit -= 9;
                }
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return nCheck % 10 === 0;
    }

    public isValidNumberRange(
        nombre: number,
        minRange: number,
        maxRange: number,
        field: string,
        errorCode?: string
    ): number {
        try {
            this.isValidNumber(nombre, field);

            if (nombre < minRange) {
                throw new LocalizeError(MessageCodes.FORMAT_NUMBER_OUT_OF_RANGE, minRange + "");
            }

            if (nombre > maxRange) {
                throw new LocalizeError(MessageCodes.FORMAT_NUMBER_OUT_OF_RANGE, maxRange + "");
            }
            return Number(nombre);
        } catch (e) {
            throw e;
        }
    }
}
