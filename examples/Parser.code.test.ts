/// <reference types="jest" />
/// <reference types="node" />

/**
 *
 * @group code/parser
 */

import {MessageCodes} from "../src/model/BifrostError";
import {BifrostBench} from "../src";
import {FixtureObject} from "../src";
import {FixtureIndex} from "../src/fixtures/FixtureIndex";
import {ParserCode} from "../src";

let p: ParserCode = new ParserCode();

describe("Phone Parser", () => {
    BifrostBench.listSuite<string, string>(
        "Phone Parser",
        BifrostBench.getList<string, string>([
            new FixtureObject("0645771773", "0645771773", {success: "0645771773"}),
            new FixtureObject("++55aa0645771773", "++55aa0645771773", {error: MessageCodes.FORMAT_PHONE_NUMBER_ERROR.code}),
            new FixtureIndex().basics.PhoneNumber.success,
            new FixtureIndex().basics.PhoneNumber.error,

        ]),
        async (obj) => {
            let r = p.phoneNumber(obj.object);
        }
    );
});

describe("Email Parser", () => {
    BifrostBench.listSuite<string, string>(
        "Email Parser",
        BifrostBench.getList<string, string>([
            new FixtureIndex().basics.Email.error,
            new FixtureIndex().basics.Email.success,

        ]),
        async (obj) => {
            let email: string = p.reformatEmail(obj.object, "Email Parser");
        }
    );
});

describe("UUID", () => {
    BifrostBench.listSuite<string, string>(
        "UUID",
        BifrostBench.getList<string, string>([
            new FixtureIndex().basics.UUID.errors_syntaxe,
            new FixtureIndex().basics.UUID.success_syntaxe,
        ]),
        async (mock) => {
            let r = p.validator_UUID(mock.object, "mock.object");
            expect(r).toMatchSnapshot(mock.success);
        }
    );
});

describe("ProperName", () => {
    BifrostBench.listSuite<string, string>(
        "ProperName",
        BifrostBench.getList<string, string>([
            new FixtureIndex().basics.ProperName.success,
            new FixtureIndex().basics.ProperName.error,
        ]),
        async (mock) => {
            let r = p.valid_proper_name(mock.object, false, "mock.object");
            expect(r).toBe(mock.success);
        },
        [
            MessageCodes.FORMAT_NAME_TOO_LONG.code,
            MessageCodes.FORMAT_STRING_TOO_LONG.code,
        ]
    );
});


describe("Date parser", () => {
    BifrostBench.listSuite<string, string>(
        "Date parser",
        BifrostBench.getList<string, string>([
            new FixtureIndex().basics.Date.success,
            new FixtureIndex().basics.Date.error
        ]),
        async (mock) => {
            let r = p.validator_date(mock.object, "date");
        },
        [
            MessageCodes.BAD_FORMAT.code,
            MessageCodes.FORMAT_BAD_DATE_FORMAT.code,
            MessageCodes.FORMAT_DATE_UNDEFINED.code,
        ]
    );
});

describe("Number validation", () => {
    BifrostBench.listSuite<{
        nombre: number,
        minRange: number,
        maxRange: number
    }, boolean>(
        "Number validation",
        BifrostBench.getList<{
            nombre: number,
            minRange: number,
            maxRange: number
        }, boolean>([
            new FixtureObject<{
                nombre: number,
                minRange: number,
                maxRange: number
            }, boolean>(
                "nombre 1",
                {
                    nombre: 1,
                    minRange: 0,
                    maxRange: 10,
                },
                {success: true}
            ),
            new FixtureObject<{
                nombre: any,
                minRange: number,
                maxRange: number
            }, boolean>(
                "nombre: undefined",
                {
                    nombre: undefined,
                    minRange: 0,
                    maxRange: 10,
                },
                {error: MessageCodes.FORMAT_NUMBER_NOT_AN_INTEGER.code}
            ),
            new FixtureObject<{
                nombre: number,
                minRange: number,
                maxRange: number
            }, boolean>(
                "max range",
                {
                    nombre: 12,
                    minRange: 0,
                    maxRange: 10,
                },
                {error: MessageCodes.FORMAT_NUMBER_OUT_OF_RANGE.code}
            ),
            new FixtureObject<{
                nombre: number,
                minRange: number,
                maxRange: number
            }, boolean>(
                "min range",
                {
                    nombre: 1,
                    minRange: 5,
                    maxRange: 10,
                },
                {error: MessageCodes.FORMAT_NUMBER_OUT_OF_RANGE.code}
            ),
            new FixtureObject<{
                nombre: any,
                minRange: number,
                maxRange: number
            }, boolean>(
                "not a number",
                {
                    nombre: {},
                    minRange: 5,
                    maxRange: 10,
                },
                {error: MessageCodes.FORMAT_NUMBER_NOT_AN_INTEGER.code}
            ),
        ]),
        async (mock) => {
            let r = p.isValidNumberRange(mock.object.nombre, mock.object.minRange, mock.object.maxRange, "value:");
        },
        [
            MessageCodes.BAD_FORMAT.code,
            MessageCodes.FORMAT_NUMBER_NOT_AN_INTEGER.code,
            MessageCodes.FORMAT_INVALID_NUMBER.code
        ]
    );
});

describe("Siret validation", () => {
    BifrostBench.listSuite<string, string>(
        "Siret validation",
        BifrostBench.getList<string, string>([
            new FixtureIndex().basics.string.siret
        ]),
        async (mock) => {
            let r = p.isSIRET(mock.object, "siret");
        }
    );
});


describe("Valide Time", function timeNumberValidation() {
    let p: ParserCode = new ParserCode();

    test("08:00", async () => {
        try {
            let time: number = p.convert_timeStringToTimeSecond("08:00");
            expect(time).toStrictEqual(28800);
        } catch (e) {
            throw e;
        }
    });
});

